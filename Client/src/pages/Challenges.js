import React from "react";
import styled from "styled-components";
import BigChallenge from "../components/BigChallenge";
import SmallChallenge from "../components/SmallChallenge";
import challenges from "../assets/challenges";
import sponchallenges from "../assets/SponChallenge";
import Title from "../components/Title";

//The Challenges page render two types of challenges small and big


const Challenges = () => {

  //This should be replaced with a fetch to the database for one random sponsered challenge. This object would be passed to BigChallenge component as props
  const sponChallenge = sponchallenges[0];

  //challenges is an array that should be replaced with a fetch that retieve an array of objects of various challenges that the user has accepted or not yet accepted

  return (
    <Container>
      <Title title="Challenges" />
      <BigChallenge
        icon={sponChallenge.icon}
        title={sponChallenge.title}
        info={sponChallenge.info}
        img={sponChallenge.img}
      />


      <Grid>
        {challenges.map((challenge) => (
          <SmallChallenge
            icon={challenge.icon}
            title={challenge.title}
            info={challenge.info}
            img={challenge.img}
            
          />
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgb(247, 247, 250);
  padding-left: 20px;
  max-width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  flex: 40%;
`;

const Block = styled.div`
  margin: 10px;
  padding: 10px;
  flex: 40%;
`;
export default Challenges;
