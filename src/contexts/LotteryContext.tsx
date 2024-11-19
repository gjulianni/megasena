import React, { createContext, ReactNode, useEffect, useState } from "react";
import { LotteryContextProps, LotteryProps, LoteriaData } from "../types"; 
import lottery from "../services/Lottery"; 
import { useLocation } from "react-router-dom";

export interface ProviderProps {
  children: ReactNode;
}

export const LotteryContext = createContext({} as LotteryContextProps);

export function LotteryProvider({ children }: ProviderProps) {
  const [loteria, setLoteria] = useState<LoteriaData | undefined>(undefined);
  const location = useLocation();

  // Função para buscar dados da loteria
  const fetchLotteryData = async (loteriaName: string) => {
    try {
      const data: LotteryProps = await lottery.getLoteria();
      setLoteria(data[loteriaName]); // Atualiza com a loteria correspondente
    } catch (error) {
      console.error("Erro ao buscar dados da loteria", error);
    }
  };

  // useEffect para atualizar a loteria com base na mudança de rota
  useEffect(() => {
    // Verifica a rota atual e chama o fetch correspondente
    if (location.pathname === "/timemania") {
      fetchLotteryData("timemania"); 
    } else if (location.pathname === "/megasena" || location.pathname === "/") {
      fetchLotteryData("megasena"); 
    } else if (location.pathname === "/quina") {
      fetchLotteryData("quina"); // Se precisar de outra loteria
    }
  }, [location.pathname]);  // A dependência é a mudança de rota

  return (
    <LotteryContext.Provider value={{ loteria, fetchLotteryData }}>
      {children}
    </LotteryContext.Provider>
  );
}