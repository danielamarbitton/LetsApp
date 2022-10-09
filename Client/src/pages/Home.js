import React from "react";
import styled from "styled-components";
import BigChallenge from "../components/BigChallenge";
import Carousel from "../components/Carousel";
import Title from "../components/Title";
import sponchallenges from "../assets/SponChallenge";

const Home = () => {

  const sponChallenge = sponchallenges[0];

  return (
    <Container>
      <Title title="Home" />

      <Titles>Upcoming Challenge</Titles>
      <BigChallenge
          icon={sponChallenge.icon}
          title={sponChallenge.title}
          info={sponChallenge.info}
          img={sponChallenge.img}/>
      
      <Titles>MemoryBook</Titles>
        <Carousel />
        <Titles>MemoryBook</Titles>
        <Carousel />
        <Titles>MemoryBook</Titles>
        <Carousel />
        <Titles>MemoryBook</Titles>
        <Carousel />

    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  border-right: 0.5px solid lightgray;
`;

const Titles = styled.div`
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: 10px;
  color: crimson;
`;

export default Home;
