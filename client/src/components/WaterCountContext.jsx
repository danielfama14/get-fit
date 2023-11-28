// WaterCountContext.js
import { createContext, useContext, useState } from 'react';

const WaterCountContext = createContext();

export const WaterCountProvider = ({ children }) => {
  const [waterCount, setWaterCount] = useState(0);

  const value = {
    waterCount,
    setWaterCount,
  };

  return (
    <WaterCountContext.Provider value={value}>
      {children}
    </WaterCountContext.Provider>
  );
};

export const useWaterCount = () => {
  return useContext(WaterCountContext);
};