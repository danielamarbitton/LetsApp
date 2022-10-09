import React from "react";
import styled from "styled-components";

const RangeSlider = () => {
  return (
    <SlideContainer>
      <Slider type="range" min="1" max="100" value="50" />
    </SlideContainer>
  );
};

const SlideContainer = styled.div`
  width: 100%;
`;

const Slider = styled.div`
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &.hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #04aa6d;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #04aa6d;
    cursor: pointer;
  }
`;

export default RangeSlider;
