import React, { createContext, useContext, useState } from 'react';

const StepCounterContext = createContext();

export const StepCounterProvider = ({ children }) => {
  const storedCount = parseInt(localStorage.getItem('stepCount')) || 0;
  const [stepCount, setStepCount] = useState(storedCount);

  const updateStepCount = (newCount) => {
    setStepCount(newCount);
    localStorage.setItem('stepCount', newCount.toString());
  };

  return (
    <StepCounterContext.Provider value={{ stepCount, updateStepCount }}>
      {children}
    </StepCounterContext.Provider>
  );
};

export const useStepCounter = () => {
  return useContext(StepCounterContext);
};
