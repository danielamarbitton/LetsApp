import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Form>
      <Log onClick={() => navigate("/update-profile")}>Update Profile</Log>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  vertical-align: center;
  justify-content: center;
  flex-direction: row;
`;

const Form = styled.form`
display: flex;
width: 300px;
height: 300px;
border: 0.5px solid lightgray;
padding: 0 20px;
justify-content: center;
align-items: center;
flex-direction: row;

`;

const Log = styled.button`
  background-color: transparent;
  border: none;
  color: crimson;
  font-weight: bolder;
  
`;

export default Settings;
