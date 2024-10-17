import React from "react";
import styled from "styled-components";
import { HomeComponent } from "../home";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 30px ;
  font-family: Montserrat;
`;

const Header = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
`;
const AddTransaction = styled.div`
  font-size: 15px;
  background: #0d1d2c;
  display: flex;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  flex-direction: row;
  border-radius: 4px;
  font-weight: bold;
`;


export const Dashboard = () => {
const { name,profilePhoto } = useGetUserInfo();

  return (
    <Container>
      <img className="profile-photo" src={profilePhoto} />

      <Header>

      <AddTransaction>
          {"Sign Out"}
      </AddTransaction>
      </Header>
      <Header>{name}'s Expense Tracker</Header>
      <HomeComponent/>
    </Container>
  );
};


