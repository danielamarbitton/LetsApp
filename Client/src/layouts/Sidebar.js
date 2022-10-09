import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  AiFillHome,
  AiFillTrophy,
  AiFillSetting,
} from "react-icons/ai";
import { GiCardPickup } from "react-icons/gi";
import { CgPolaroid } from "react-icons/cg";
import Logo from "../assets/Logo";
import { useAuth } from "../context/AuthContext";


const Sidebar = ({children}) => {

  const[isOpen, setIsOpen] = useState(false);
  const[error, setError] = useState('');
  const { logout } = useAuth();
  const navigate = useNavigate();

  const toggle = () => setIsOpen (!isOpen);

  const handleLogout = async() => {
    setError('') 

    try{
      await logout()
      navigate('/login') 
    }catch{
      setError('Failed to logout')
    }
  }

  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <AiFillHome/>,
    },
    {
      path: "/generator",
      name: "Generator",
      icon: <GiCardPickup/>,
    },
    {
      path: "/challenges",
      name: "Challenges",
      icon: <AiFillTrophy/>,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <AiFillSetting />,
    },
    {
      path: "/maker",
      name: "Maker",
      icon: <CgPolaroid />,
    },
    
  ];

  return (
    <Container>
      <StyledSidebar style={{width: isOpen ? "200px" : "100px"}}>
        <TopSection>
          
          <Bars onClick={toggle} style={{marginLeft: isOpen? "10px" : "10px"}}>
            <Logo />
          </Bars>
        </TopSection>
        {menuItem.map((item, index) => (
          <StyledNavLink to={item.path} key={index}>
            <Icon>{item.icon}</Icon>
            <LinkText style={{display: isOpen? "block" : "none"}}>{item.name}</LinkText>
          </StyledNavLink>
        ))}
        <Button onClick={handleLogout}>Sign Out</Button>
      </StyledSidebar>
      
      <main>{children}  </main>
    </Container>
  );
};

const StyledNavLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: #A6A6A6;
  margin-top: 20px;
  margin-bottom: 30px;
  padding-left: 35px;
  padding-top: 5px;
  gap: 15px;
  transition: all 0.5s;

  &:hover {
    background-color: crimson;
  }

  &.active {
    color: crimson;
  }
`;

const Container = styled.div`
display:flex;
`;

const StyledSidebar = styled.div`
background-color: rgb(255, 255, 255);

color : #A6A6A6;
height: 100vh;
width: 175px;
border-right: 0.25px solid lightgray;
transition: all 1s;
`;

const TopSection = styled.div`
display: flex;
align-items: center;
padding: 20px 15px;
`;

const Bars = styled.div`
display: flexbox;
font-size: 25px;
margin-left: 35px;
margin-top: 7px;
`;

const Icon = styled.div`
font-size: 27px`;

const LinkText = styled.div`
font-size: 20px`;


const Button = styled.button`
background-color: crimson;
border: none;
font-size:small;
color: white;
font-weight: bolder;
border-radius: 5px;
margin-left: 12.5px;
padding: 10px;
`;

export default Sidebar;
