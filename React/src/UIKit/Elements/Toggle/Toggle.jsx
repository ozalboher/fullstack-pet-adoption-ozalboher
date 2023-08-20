import React from 'react';
import './Toggle.css';

export const Toggle = ({ checked, onChange }) => {
    


    return (
      <label className="toggle">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <div className="slider" />
      </label>
    );
};


