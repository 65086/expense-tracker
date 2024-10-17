import React from "react";
import "./styles.css";
import styled from "styled-components";
import { HomeComponent } from "../home";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useNavigate } from "react-router-dom";

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


export const Dashboard = () => {
const { name,profilePhoto } = useGetUserInfo();
const navigate = useNavigate();

const signUserOut = async () => {
  try {
    await signOut(auth);
    localStorage.clear();
    navigate("/");
  } catch (err) {
    console.error(err);
  }
};
  return (
    <Container>
      <Header>
      <span>Expense Tracker </span>
      <img src={profilePhoto} alt="Avatar" title={name} className="avatar" onClick={signUserOut} ></img>
      </Header>
      <HomeComponent/>
    </Container>
  );
};


