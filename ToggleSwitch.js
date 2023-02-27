import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function ToggleSwitch({checkedState}) {
  const [checked, setChecked] = useState(true);

  const handleChange = state => {
    console.log("handleChange", state);
    setChecked(state);
    checkedState(state);
  };

  return (
    
    <div className="app" style={{textAlign: "left"}}>
      <ReactSwitch
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
}

export default ToggleSwitch