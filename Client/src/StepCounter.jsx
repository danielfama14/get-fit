// StepCounter.jsx

import React, { useState } from 'react';

function StepCounter() {
  const [stepCount, setStepCount] = useState(0);

  return (
    <div>
      <h2>Step Counter</h2>
      <p>Step count: {stepCount}</p>
      <button onClick={() => setStepCount((count) => count + 1)}>
        Add Step
      </button>
      {/* You can add more features and styling as needed */}
    </div>
  );
}

export default StepCounter;
