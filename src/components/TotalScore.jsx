import React from "react";
import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <Total>
      <div>
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>
    </Total>
  );
};

export default TotalScore;

const Total = styled.div`
  text-align: center;
  max-width: 220px;
  h1 {
    font-size: 80px;
    margin: 0;
    padding: 0;
    font-weight: 500;
  }
  p {
    font-size: 24px;
    margin: 0;
    padding: 0;
  }
`;
