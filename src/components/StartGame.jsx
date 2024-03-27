import React from "react";
import styled from "styled-components";
import style from "./StartGame.module.css";
const StartGame = ({ toggle }) => {
  return (
    <section>
      <Container>
        <div>
          <img src="/images/dices.png" alt="" />
        </div>
        <div>
          <h1 className={style.heading}>DICE GAME</h1>
          <button onClick={toggle} className={style.button}>
            Play Now
          </button>
        </div>
      </Container>
    </section>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
