export interface LotteryProps {
  [key: string]: LoteriaData; // Cada loteria será representada por um nome e seus dados
}

export interface LoteriaData {
  acumulado: boolean;
  concursoEspecial: boolean;
  dataApuracao: string;
  dataPorExtenso: string;
  dataProximoConcurso: string;
  dezenas: string[];
  numeroDoConcurso: number;
  quantidadeGanhadores: number;
  tipoPublicacao: number;
  tipoJogo: string;
  valorEstimadoProximoConcurso: number;
  valorPremio: number;
}

export interface LotteryContextProps {
  loteria: LoteriaData | undefined;
  fetchLotteryData: (loteriaName: string) => Promise<void>;
}