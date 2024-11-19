import { Route, Routes } from 'react-router-dom';
import Megasena from '../pages/Megasena';
import Timemania from '../pages/Timemania';
import { LotteryProvider } from '../contexts/LotteryContext'; 
import Quina from '../pages/Quina';

export default function LotteryRoute() {
  return (
    <LotteryProvider>
      <Routes>
        <Route path='/' element={<Megasena />} />
        <Route path='/megasena' element={<Megasena />} />
        <Route path='/quina' element={<Quina />} />
        <Route path='/timemania' element={<Timemania />} />
      </Routes>
    </LotteryProvider>
  );
}