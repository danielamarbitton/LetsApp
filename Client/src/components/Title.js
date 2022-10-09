import React from "react";
import styled from "styled-components";

/*
Title component render titles at the top of Pages, a word is passed as props
*/


const Title = ({title}) => {
  return ( 
    <Word>{title}</Word>
  );
}

const Word = styled.div`
font-family: Roboto;
font-size: xx-large;
font-weight: bold;
color: crimson;
margin: 10px;
`;

export default Title;