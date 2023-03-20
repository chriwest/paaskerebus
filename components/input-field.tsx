import React, { useState } from 'react';

interface InputFieldProps {
  correctValue: string;
  onValidation: (isValid: boolean) => void;
}

const InputField: React.FC<InputFieldProps> = ({ correctValue, onValidation }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (value === correctValue) {
      onValidation(true);
    } else {
      onValidation(false);
    }
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default InputField;
