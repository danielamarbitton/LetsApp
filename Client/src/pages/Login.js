import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo";
import { useAuth } from "../context/AuthContext";

//useRefs are used to keep current values of password and email. These values are use to pass as parameters to the firbase auth login function

const Signup = () => {

  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef(); 
  const { login } = useAuth();
  const [error,setError] = useState('');
  const [loading, setLoading] = useState(false);
    
  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    } catch {
      setError("Failed to sign in")
    }

  return (
    <Container>
      <Nav>
        <LogoDiv><Logo/></LogoDiv>
        <LoginButton onClick={()=> navigate('/Signup')}>Sign Up</LoginButton>
      </Nav>
      <Top>
        <Right>

          <Form onSubmit={handleSubmit}>

          <SubTitle>Log In</SubTitle>
          {error && <ErrorMessage>{error}</ErrorMessage>}

            <FormDiv>
              <Label>Email</Label>
              <Input type='email' placeholder='Email' ref={emailRef} required />
            </FormDiv>

            <FormDiv>
              <Label>Password</Label>
              <Input type='password' placeholder='Password' ref={passwordRef} required />
            </FormDiv>

            <SignupButton disabled={loading} type="subumit">Log In</SignupButton> 

            <Forgot onClick={()=> navigate('/forgot-password')}>Forgot Password?</Forgot>

          </Form>

          <Already>Don't have an account?<Log onClick={()=> navigate('/Signup')}>Sign Up</Log></Already>
  
        </Right>
      </Top>

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
width: 300px;
height: 3em;
color: black;
font-weight: bold;
background-color: pink;
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



const Top = styled.div`
  justify-content: center;
  max-width: 700px;
  display: flex;
  flex-direction: row;
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


const SignupButton = styled.button`
margin-top:30px;
margin-bottom:20px;
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

const Forgot = styled.button`
background-color: transparent;
border: none;
font-size:small;
color: crimson;
font-weight: bolder;
margin-left: 85px;
margin-bottom: 20px;
`;

export default Signup;