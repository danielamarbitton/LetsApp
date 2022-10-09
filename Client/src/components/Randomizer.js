import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import IMAGES from "../assets/images";
import styled from "styled-components";

const Randomizer = () => {
  
  const [flipImage, setFlipImage] = useState(null);

    useEffect(() => {

        const intervalId = setInterval(() => {
        setFlipImage(IMAGES[Math.floor(Math.random() * IMAGES.length)]);
      }, 700)

      return () => clearInterval(intervalId);

    }, [])

    if (flipImage !== null){

    return (
        <Div>
            <Img src={flipImage} alt="" />
        </Div>
    )}
    
}

const Img = styled.img`
width: 200px;
margin-left: 25px;
margin-top: 20px;
`;

const Div = styled.div`
width: 200px;
height: 200px;
border-radius: 100px;
margin-top: 50px;
`;

export default Randomizer;