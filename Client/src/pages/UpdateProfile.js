import React from "react";
import { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo";
import { useAuth } from "../context/AuthContext";

const UpdateProfile = () => {

  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordconfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error,setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault()

    if(passwordRef.current.value !== 
      passwordconfirmRef.current.value){
        return setError("Passwords do not match")
      }

    const promises = [];
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value !== currentUser.password) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises).then(()=> {
      navigate("/")
    }).catch(() => {
      setError("Failed to update account")
    }).finally(()=>{
      setLoading(false)
    })

  }


  return (
    <Container>
      <Nav>
        <LogoDiv><Logo/></LogoDiv>
      </Nav>

      <Top>
        <Right>

          <Form onSubmit={handleSubmit}>

          <SubTitle>Update Password</SubTitle>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {message && <SuccessMessage>{message}</SuccessMessage>}
            <FormDiv>
              <Label>Email</Label>
              <Input type='email' placeholder='Email' ref={emailRef} required defaultValue={currentUser.email} />
            </FormDiv>

            <FormDiv>
              <Label>Password</Label>
              <Input type='password' placeholder='Leave blank to keep the same' ref={passwordRef} />
            </FormDiv>

            <FormDiv>
              <Label>Password Confirmation</Label>
              <Input type='password' placeholder='Leave blank to keep the same' ref={passwordconfirmRef}  />
            </FormDiv>

            <SignupButton disabled={loading} type="submit">Sign Up</SignupButton> 

          </Form>

          <Already><Log onClick={()=> navigate('/')}>Cancel</Log></Already>
  
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


export default UpdateProfile;