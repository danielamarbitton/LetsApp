import React, { useState } from "react";
import styled from "styled-components";
import IMAGES from "../assets/images";
import Card from "../components/Card";
import Title from "../components/Title";

const Generator = () => {

  const [cards, setCards] = useState ([...IMAGES]);
  const [choice, setChoice] = useState(null)

/*   const shuffle = () => {
    const shuffled = [...IMAGES]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random}))

    setCards(card)} */

  const handleChoice = (card) => {setChoice(card)}

  return ( 
    <>
    <Title title="Generator" />
    <Board>
      {cards.map(card => (
        <Card 
        card = {card}
        handleChoice = {handleChoice}
        flipped={card === choice}
        />))}
      </Board>
    </>
  );
}

const Board = styled.div`
background-color: rgb(247, 247, 250);
width: 100vh;
max-width: 100vw;
display: grid;
grid-gap: 10px;
margin: 20px auto;
padding-left: 20px;
grid-template-columns: repeat(5,1fr);
`;



export default Generator;