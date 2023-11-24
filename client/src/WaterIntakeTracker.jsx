// WaterIntakeTracker.jsx

import React, { useState } from 'react';

function WaterIntakeTracker() {
  const [waterCount, setWaterCount] = useState(0);

  return (
    <div>
      <h2>Water Intake Tracker</h2>
      <p>Water count: {waterCount} ml</p>
      <button onClick={() => setWaterCount((count) => count + 250)}>
        Add 250 ml
      </button>
      {/* You can add more features and styling as needed */}
    </div>
  );
}

export default WaterIntakeTracker;
