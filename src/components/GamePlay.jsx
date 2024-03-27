import React, { useState } from "react";
import TotalScore from "./TotalScore";
import SelectNumber from "./SelectNumber";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectNumber, setSelectNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const diceRol = () => {
    if (!selectNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDice((prev) => randomNumber);

    if (selectNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };
  return (
    <GamePlayStyle>
      <div className="top-game">
        <TotalScore score={score} />
        <SelectNumber
          error={error}
          setError={setError}
          selectNumber={selectNumber}
          setSelectNumber={setSelectNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} diceRol={diceRol} />
      <div>
        <Button onClick={resetScore}>Reset Score</Button>
        <Outlinebtn onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Outlinebtn>
      </div>
      {showRules && <Rules />}
    </GamePlayStyle>
  );
};

export default GamePlay;

const Button = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  font-size: 16px;
  min-width: 220px;
  cursor: pointer;
  background-color: black;
  color: white;
  padding: 10px;
  transition: 0.4s all ease-in-out;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    transition: 0.4s all ease-in-out;
  }
`;

const Outlinebtn = styled(Button)`
  background-color: white;
  color: black;
  margin-top: 20px;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const GamePlayStyle = styled.div`
 width: 1000px;
 margin: 10px auto;
 

  .top-game{
    display: flex;
    flex-direction;
    align-items: center;
    justify-content: space-between;
  }

  SelectNumber{
    marign-top: 20px
  }
`;
