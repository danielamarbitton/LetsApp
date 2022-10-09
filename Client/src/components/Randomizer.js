import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import IMAGES from "../assets/images";
import styled from "styled-components";

/*The randomizer component render one image at a time from an array every 700ms */

const Randomizer = () => {
  

  /*useEffect set a set interval in motion that clears every 700ms. flipImage useState is used to set the image that is later clear and set again  */
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