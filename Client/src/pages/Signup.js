import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo";
import Randomizer from "../components/Randomizer";
import { useAuth } from "../context/AuthContext";

const Signup = () => {

  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordconfirmRef = useRef();
  const { signup } = useAuth();
  const [error,setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault()

    if(passwordRef.current.value !== 
      passwordconfirmRef.current.value){
        return setError("Passwords do not match")
      }

    try{
      setMessage('')
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      setMessage('Successfully Created Account!')
    } catch {
      setError("Failed to create an account")
    }
  }
 

  return (
    <Container>
      <Nav>
        <LogoDiv><Logo/></LogoDiv>
        <LoginButton onClick={()=> navigate('/login')}>Log In</LoginButton>
      </Nav>

      <Title>The #1 app to make Exciting Memories</Title>

      <Top>
        <Left><Randomizer/></Left>
        <Right>

          <Form onSubmit={handleSubmit}>

          <SubTitle>Sign Up</SubTitle>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {message && <SuccessMessage>{message}</SuccessMessage>}
            <FormDiv>
              <Label>Email</Label>
              <Input type='email' placeholder='Email' ref={emailRef} required />
            </FormDiv>

            <FormDiv>
              <Label>Password</Label>
              <Input type='password' placeholder='Password' ref={passwordRef} required />
            </FormDiv>

            <FormDiv>
              <Label>Password Confirmation</Label>
              <Input type='password' placeholder='Confirm' ref={passwordconfirmRef} required />
            </FormDiv>

            <SignupButton disabled={loading} type="subumit">Sign Up</SignupButton> 

          </Form>

          <Already>Already have an account?<Log onClick={()=> navigate('/login')}>Log In</Log></Already>
  
        </Right>
      </Top>

      <Bottom>
        <Menu></Menu>
        <Follow></Follow>
        <GetStarted></GetStarted>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column; 
`;

const Form = styled.form`
width: 300px;
border: 0.5px solid lightgray;
padding: 0 20px;
`;

const SubTitle = styled.h1`
text-align: center;
`;

const ErrorMessage = styled.button`
text-align: center;
width: 305px;
height: 3em;
color: black;
font-weight: bold;
background-color: pink;
border: none;
border-radius:5px;
margin-bottom: 10px;
`;

const SuccessMessage = styled.button`
text-align: center;
width: 305px;
height: 3em;
color: black;
font-weight: bold;
background-color: lightgreen;
border: none;
border-radius:5px;
margin-bottom: 10px;
`;

const LogoDiv = styled.div`
margin-left: 20px;
`;

const Nav = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  padding-top: 15px;
  height: 50px;
  border-bottom: 0.1px solid lightgrey;
`;

const Title = styled.div`
margin-top: 20px;
margin-bottom: 40px;
font-size: 25px;
font-weight: bold;
text-align: center;
`;

const Top = styled.div`
  justify-content: center;
  max-width: 700px;
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
display: flex;
justify-content: center;  
`;

const Right = styled.div`

justify-content: center;
max-width: 350px;
padding: 0 20px;
margin: 50px;
`;

const LoginButton = styled.button`
  display: flex;
  padding: 5px 15px;
  margin-right: 20px;
  height: 30px;
  background-color: transparent;
  border: 0.5px solid lightgrey;
  border-radius: 5px;
`;

const Button = styled.div`
width: 200px;
background-color: transparent;
padding: 15px 100px;
border: 0.5px solid lightgrey;
margin: 10px;

&:hover {
    background-color: crimson;
  }
`;

const Bottom = styled.div`
  background-color: #333;
  height: 250px
`;

const Menu = styled.div``;

const Follow = styled.div``;

const FormDiv = styled.div`
display:flex;
flex-direction: column;
`;

const Input = styled.input`
width: 300px;
margin-top:10px;
height: 3em;
border: 0.5px solid lightgray;
border-radius: 5px;

`;

const Label = styled.label`
margin-top:10px;

`;

const GetStarted = styled.div``;

const SignupButton = styled.button`
margin-top:30px;
margin-bottom:30px;
width: 305px;
height: 3em;
color: white;
background-color: crimson;
border: none;
border-radius:5px;
`;


const Already = styled.div`
font-size:small;
text-align: center;
margin-top: 10px;
`;

const Log = styled.button`
background-color: transparent;
border: none;
font-size:small;
color: crimson;
font-weight: bolder;
`;

export default Signup;
