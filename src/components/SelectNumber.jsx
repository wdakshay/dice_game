import React, { useState } from "react";
import styled from "styled-components";

const SelectNumber = ({ selectNumber, setSelectNumber, error, setError }) => {
  const arg = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value) => {
    setSelectNumber(value);
    setError("");
  };

  return (
    <DiceNumber>
      <p className="error">{error}</p>
      <div className="main-box">
        {arg.map((value, i) => (
          <Box
            isSelected={value === selectNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </DiceNumber>
  );
};

export default SelectNumber;

const DiceNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 40px;
  .error {
    font-size: 15px;
    color: red;
    text-align: end;
    font-weight: 400;
  }
  .main-box {
    display: flex;
    gap: 10px;
  }
  p {
    font-size: 24px;
    text-align: end;
    margin: 0;
    margin-top: 10px;
    padding: 0;
  }
`;
const Box = styled.div`
  border: 1px solid black;
  width: 72px;
  height: 72px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  span {
  }
`;
