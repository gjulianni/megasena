import React, { useContext } from "react";
import { LotteryContext } from "../contexts/LotteryContext";
import styled from "styled-components";

// Container para centralizar o painel na tela
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Panel = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 80%;
  max-width: 500px;
`;

const DezenasContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Dezenas = styled.div`
  background-color: #209869;
  color: #fff;
  font-size: 24px;
  margin: 10px;
  padding: 15px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Home = () => {
  const { megasena } = useContext(LotteryContext);

  // Se não há dados ainda (carregando), exibe "Carregando..."
  if (!megasena) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      <Panel>
        <h1>Dezenas do Último Concurso</h1>
        <DezenasContainer>
          {megasena.dezenas.map((dezena, index) => (
            <Dezenas key={index}>{dezena}</Dezenas>
          ))}
        </DezenasContainer>
      </Panel>
    </Container>
  );
};

export default Home;