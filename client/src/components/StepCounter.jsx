import React, { useState } from 'react';
import { useStepCounter } from '../components/StepCountContext';

function StepCounter() {
  const { stepCount, updateStepCount } = useStepCounter();
  const [manualInput, setManualInput] = useState('');

  const handleInputChange = (e) => {
    setManualInput(e.target.value);
  };

  const handleAddStep = () => {
    const parsedInput = parseInt(manualInput, 10);
    if (!isNaN(parsedInput)) {
      const newCount = stepCount + parsedInput;
      updateStepCount(newCount);
      setManualInput('');
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2 style={{ color: 'green' }}>Step Counter</h2>
      <p style={{ fontSize: '18px' }}>Step count: {stepCount}</p>
      <div>
        <input
          type="number"
          value={manualInput}
          onChange={handleInputChange}
          placeholder="Enter steps"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button
          style={{
            backgroundColor: 'orange',
            color: 'white',
            padding: '5px',
          }}
          onClick={handleAddStep}
        >
          Enter Step Count
        </button>
      </div>
    </div>
  );
}

export default StepCounter;