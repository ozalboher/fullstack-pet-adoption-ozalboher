import React from 'react';
import './TextInput.css';

export const TextInput = ({name, value, onChange}) => {
  return (
    <div className="input-field">
      <input
        type="text"
        className="input-field__input"
        placeholder={name}
        value={value}
        onChange={(e) => onChange({ [name]: e.target.value })}
      />
    </div>
  );
};

