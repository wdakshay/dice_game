import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <p>Select any number.</p>
      <p>
        After click on dice if selected number is equal to dice number you will
        get same point as dice.
      </p>
      <p>if you get wrong guess then 2 point will be dedcuted. </p>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  background-color: #fbf1f1;
  max-width: 800px;
  margin: 50px auto;
  padding: 20px 40px;
  border-radius: 5px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }
`;
