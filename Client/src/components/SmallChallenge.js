import React from "react";
import styled from "styled-components";

/*
SmallChallenge component renders the small card using props {img, icon, title, info} from an array passed from the Challenge Page
*/



const SmallChallenge = ({img, icon, title, info}) => {

  console.log(img)

  return (
    <SmallBox>
      <Top>
        <Icon src={icon}/>
        <ImgDiv><Img src={img}/></ImgDiv>
      </Top>
      <Bottom>
        <Title>{title}</Title>
        <Info>{info}</Info>
        <Join>Join Challenge</Join>
      </Bottom>
    </SmallBox>
  )
};

const SmallBox = styled.div`
background-color: rgb(255,255,255);
width: 350px;
height: 250px;
margin: 10px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;`;
const Top = styled.div`
margin-bottom: 10px;
display: flex;
`;
const Title = styled.div`
margin-bottom: 10px;
font-size: large;
font-weight: bold;
`;
const Join = styled.button`
width:330px;
height: 35px;
border: none;
color: white;
background-color: crimson;
border-radius: 5px;
`;

const ImgDiv = styled.div`
display: flex;
height: 100px;
justify-content:center;
align-items:center;
overflow: hidden;
`;

const Img = styled.img`
min-width: 80px;
`;

const Icon = styled.img`
width:60px;
padding: 20px;
`;
const Bottom = styled.div`
margin-left: 10px;
`;

const Info = styled.div`
font-size: small;
margin-bottom: 50px;
`;

export default SmallChallenge;
