import React, { useState } from 'react';
import { useWaterCount } from './WaterCountContext';

function WaterIntakeTracker() {
  const { waterCount, setWaterCount } = useWaterCount();
  const [manualInput, setManualInput] = useState('');

  const handleInputChange = (e) => {
    setManualInput(e.target.value);
  };

  const handleAddWater = () => {
    const parsedInput = parseInt(manualInput, 10);
    if (!isNaN(parsedInput)) {
      setWaterCount((count) => count + parsedInput);
      setManualInput('');
    }
  };

  const handleAdjustWater = (amount) => {
    setManualInput((input) => {
      const newValue = parseInt(input, 10) + amount;
      return isNaN(newValue) ? '' : String(newValue);
    });
  };

  const handleReset = () => {
    // Reset the water count to 0
    setWaterCount(0);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2 style={{ color: 'blue' }}>Water Intake Tracker</h2>
      <p style={{ fontSize: '18px' }}>Water count: {waterCount} ml</p>
      <div>
        <div>
          {/* Increase arrow with 100 ml increment */}
          <button
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '10px',
              marginRight: '10px',
            }}
            onClick={() => handleAdjustWater(100)}
          >
            +
          </button>
          {/* Decrease arrow with 100 ml decrement */}
          <button
            style={{
              backgroundColor: 'red',
              color: 'white',
              padding: '10px',
            }}
            onClick={() => handleAdjustWater(-100)}
          >
            -
          </button>
        </div>
        <div>
          <input
            type="number"
            value={manualInput}
            onChange={handleInputChange}
            placeholder="Enter ml"
            style={{ marginRight: '10px', padding: '5px' }}
          />
          <button
            style={{
              backgroundColor: 'orange',
              color: 'white',
              padding: '5px',
            }}
            onClick={handleAddWater}
          >
            Enter Water Intake
          </button>
          <button
            style={{
              backgroundColor: 'red',
              color: 'white',
              padding: '5px',
            }}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default WaterIntakeTracker;
