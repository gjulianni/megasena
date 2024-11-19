import React, { createContext, ReactNode, useEffect, useState } from "react";
import { LotteryContextProps, LotteryProps, Props } from "../types"; 
import lottery from "../services/Lottery"; 

export interface ProviderProps {
  children: ReactNode;
}

export const LotteryContext = createContext({} as LotteryContextProps);

export function LotteryProvider({ children }: ProviderProps) {

  const [megasena, setMegasena] = useState<Props | undefined>(undefined);

  useEffect(() => {
    const fetchLotteryData = async () => {
      try {
        const data: LotteryProps = await lottery.get(); 
        setMegasena(data.megasena); 
      } catch (error) {
        console.error("Erro ao buscar dados da Mega-Sena", error);
      }
    };

    fetchLotteryData();
  }, []);

  return (
    <LotteryContext.Provider value={{ megasena }}>
      {children}
    </LotteryContext.Provider>
  );
}