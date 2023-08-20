import React from 'react';
import { Toggle } from "UIKit";
import './ToggleContainer.css';

export const ToggleContainer = ({isChecked, handleToggleChange}) => {
    
  return (
    <div className="toggle-container">
      <span className="toggle-text1">Basic</span>
      <Toggle checked={isChecked} onChange={handleToggleChange} />
      <span className="toggle-text2">Advanced</span>
    </div>
  );
};


