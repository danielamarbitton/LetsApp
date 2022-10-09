import React from "react";
import styled from "styled-components";

/*
The Card component render the face of the card or the back of the card  using the props flipped. the card prop is the information neccessary to render the img
*/

const Card = ({ card, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <Container>
      {flipped ? (
        <Flip>
          <Front src={card} alt="card front"></Front>
        </Flip>
      ) : (
        <NoFlip>
          <Back
            src="/images/logo.png"
            onClick={handleClick}
            alt="card back"
          ></Back>
        </NoFlip>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100px;
`;

const Flip = styled.div``;

const NoFlip = styled.div``;

const Front = styled.img`
  width: 95px;
`;

const Back = styled.img`
  width: 75px;
  margin: 10px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

export default Card;
