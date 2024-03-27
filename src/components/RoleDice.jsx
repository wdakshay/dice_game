import React, { useState } from "react";
import styled from "styled-components";

const RoleDice = ({ currentDice, diceRol }) => {
  return (
    <DiceContainer>
      <div className="dice">
        <img
          onClick={diceRol}
          src={`images/dice_${currentDice}.png`}
          alt="Dice Image"
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  text-align: center;
  margin-top: 50px;

  img {
    cursor: pointer;
  }
  p {
    font-size: 24px;
    margin: 0;
  }
`;
