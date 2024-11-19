import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background-color: orange;
  color: white;
  display: flex;
  justify-content: space-between; /* Espaça logo e menu */
  align-items: center;
  padding: 0 25px; /* Ajuste o padding lateral */
  height: 60px; /* Altura fixa para a navbar */
  margin: 0;
`;

const StyledUL = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1; /* Faz com que a lista ocupe o espaço restante */
  justify-content: flex-end; /* Alinha os itens à direita */
`;

const StyledLI = styled.li`
  margin-left: 30px;  /* Ajuste a margem para a distância dos itens do menu */
  font-family: 'Inter', sans-serif;
  font-size: 1.3rem;
  font-weight: 200;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  display: block; /* Permite que o efeito de hover afete toda a área */
  padding: 10px 20px; /* Dá um padding para aumentar a área clicável */
  transition: background-color 0.3s ease, color 0.3s ease; /* Adiciona transição suave */

  &:hover {
    color: #000; /* Cor ao passar o mouse */
    background-color: #fff; /* Cor de fundo ao passar o mouse */
  }
`;

const Nav: React.FC = () => {

    const navigate = useNavigate();

    const handleTimeManiaClick = () => {
        navigate('/timemania');
    }
    const handleQuinaClick = () => {
        navigate('/quina');
    }
    const handleMegasenaClick = () => {
        navigate('/megasena');
    }

  return (
    <StyledNav>
      
      <img
        src="https://logospng.org/download/caixa-economica-federal/logo-caixa-economica-federal-512.png"
        className="logo"
        alt="Imagem da caixa"
        style={{ height: '200px' }} 
      />
      <StyledUL>
        <StyledLI onClick={handleMegasenaClick}>Megasena</StyledLI>
        <StyledLI onClick={handleQuinaClick}>Quina</StyledLI>
        <StyledLI onClick={handleTimeManiaClick}>Timemania</StyledLI>
      </StyledUL>
    </StyledNav>
  );
};

export default Nav;