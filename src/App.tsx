import { BrowserRouter } from "react-router-dom"; 
import LotteryRoute from './routes';  
import { LotteryProvider } from './contexts/LotteryContext';  

const App = () => {
  return (
    <BrowserRouter>
      <LotteryProvider>
        <LotteryRoute />
      </LotteryProvider>
    </BrowserRouter>
  );
};

export default App;