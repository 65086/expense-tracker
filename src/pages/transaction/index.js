import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  padding: 10px 22px;
  font-size: 18px;
  width: 100%;
  gap: 10px;
  font-weight: bold;
  overflow-y: auto !important;
  & input {
    padding: 10px 12px;
    border-radius: 12px;
    background: #e6e8e9;
    border: 1px solid #e6e8e9;
    outline: none;
  }
`;
const Cell = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid #e6e8e9;
  align-items: center;
  font-weight: normal;
  justify-content: space-between;
  border-right: 4px solid ${(props) => (props.isExpense ? "red" : "green")};
`;
const TransactionCell = (props) => {
  return (
    <Cell isExpense={props.payload?.transactionType === "expense"}>
      <span>{props.payload?.description}</span>
      <span><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" /> {" "}{props.payload?.transactionAmount}</span>
      <span><FontAwesomeIcon icon="fa-regular fa-trash-can" /></span>
    </Cell>
  );
};
export const TransactionsComponent = (props) => {
  const { transactions } = useGetTransactions();

  const [searchText, updateSearchText] = useState("");
  const [filteredTransaction, updateTxn] = useState(transactions);

  const filterData = (searchText) => {
    if (!searchText || !searchText.trim().length) {
      updateTxn(transactions);
      return;
    }
    let txn = [...transactions];
    txn = txn.filter((payload) =>
      payload.description.toLowerCase().includes(searchText.toLowerCase().trim()),
    );
    updateTxn(txn);
  };

  useEffect(() => {
    filterData(searchText);
  }, [transactions]);

  return (
    <Container>
      Transactions
      <input
        placeholder="Search"
        onChange={(e) => {
          updateSearchText(e.target.value);
          filterData(e.target.value);
        }}
      />
      {filteredTransaction?.map((payload) => (
        <TransactionCell payload={payload} />
      ))}
    </Container>
  );
};