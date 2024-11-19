import React from "react";
import { LotteryProvider } from "./contexts/LotteryContext"; 
import Home from "./pages/Home"; 

const App = () => {
  return (
    <LotteryProvider> 
      <Home /> 
    </LotteryProvider>
  );
};

export default App;