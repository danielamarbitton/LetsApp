import React, { useState } from "react";
import styled from "styled-components";
import IMAGES from "../assets/images";
import Card from "../components/Card";
import Title from "../components/Title";

const Generator = () => {

  /*cards state should be set with a fetch from the db to get an array of images */
  const [cards, setCards] = useState ([...IMAGES]);

  /*choice state is set by the handleChoice function which set the user's choice*/
  const [choice, setChoice] = useState(null)


  /*This bit of used logic is to randomize the array */
/*   const shuffle = () => {
    const shuffled = [...IMAGES]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random}))

    setCards(card)} */


  /*handleChoice is an onClick event that sets the choice of the user */
  const handleChoice = (card) => {setChoice(card)}


  /*Mapping through the cards is neccesary to properly render and passing props to the Card Component */
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