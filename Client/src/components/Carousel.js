import React from "react";
import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import picnic from "../assets/picnic";
import { motion } from "framer-motion";

const Carousel = (array) => {
  const [width, setWidth] = useState(0);
  const car = useRef();

  useEffect(() => {
    setWidth(car.current.scrollWidth - car.current.offsetWidth);
  }, []);

  return (
    <Carouseldiv>
      <Container ref={car} whileTap={{ cursor: "grabbing" }}>
        <InnerCarousel drag="x" dragConstraints={{ right: 0, left: -width }}>
          {picnic.map((image) => {
            return (
              <Polaroid>
                <Title href="" title="Santorini">
                  <Img src={image} alt="" />
                </Title>
              </Polaroid>
            );
          })}
        </InnerCarousel>
      </Container>
    </Carouseldiv>
  );
};

const Carouseldiv = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
  width: 720px;
  background-color: rgb(247, 247, 250);
`;

const Polaroid = styled.div`
  background: #ffffff;
  display: inline-block;
  margin: 10px 10px 10px;
  padding: 15px 15px 30px;
  text-align: center;
  text-decoration: none;
  -webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  transition: all 0.2s linear;
  z-index: 0;
  position: relative;

  &:hover {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    transform: scale(1.05);
    z-index: 10;
    -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
  }
`;

const Title = styled.div`
  &:after {
    color: #333;
    font-size: 20px;
    content: attr(title);
    position: relative;
    top: 10px;
  }
`;

const Img = styled.img`
  pointer-events: none;
  filter: grayscale(60%);
  display: block;
  width: 150px;
  height: 150px;
  max-width: 150px;
  max-height: 150px;
`;

const InnerCarousel = styled(motion.div)`
  display: flex;
`;

export default Carousel;
