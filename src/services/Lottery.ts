import { LotteryProps } from "../types";
import api from "./api"; // Importando a instância do Axios

class Lottery {
  // Método para buscar os dados completos das loterias
  async getLoteria(): Promise<LotteryProps> {
    // Espera 2 segundos para simular um atraso
    await delay(2000);
    const { data } = await api.get("/");

    return data; 
  }
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const lottery = new Lottery();
export default lottery;