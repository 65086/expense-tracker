
import styled from "styled-components";
import OverViewComponent from "../overview";
import { TransactionsComponent } from "../transaction";

const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  padding: 10px 22px;
  font-size: 18px;
  width: 360px;
  align-items: center;
  justify-content: space-between;
`;

export const HomeComponent = (props) => {

   
    return (
        <Container>
            <OverViewComponent/>
            <TransactionsComponent />
        </Container>
    );
};