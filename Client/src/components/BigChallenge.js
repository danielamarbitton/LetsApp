import React from "react";
import styled from "styled-components";

const BigChallenge = ({img, icon, title, info}) => {
  return (
    <BigBox>
      <Left>
        <Icon src={icon}/>
        <Title>{title}</Title>
        <Info>{info}</Info>
        <Join>Join Challenge</Join>
      </Left>
      <Right>
        <Img src={img} />
      </Right>
    </BigBox>
  );
};

const BigBox = styled.div`
width: 720px;
height: 300px;
display: flex;
margin: 10px;
background-color: rgb(255,255,255);
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const Left = styled.div`
margin-left: 10px;
`;

const Title = styled.div`
margin-bottom: 10px;
font-size: large;
font-weight: bold;
`;

const Join = styled.button`
width:250px;
height: 35px;
margin-right: 10px;
border: none;
color: white;
background-color: crimson;
border-radius: 5px;
`;

const Img = styled.img`
min-width: 100px;
height: 300px;
`;

const Icon = styled.img`
width: 50px;
padding: 20px;
margin-left: -10px;
`;

const Right = styled.div``;

const Info = styled.div`
font-size: small;
margin-bottom: 100px;
`;

export default BigChallenge;
