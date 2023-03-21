// InputField.tsx
import React, { useState } from 'react';
import styles from '../styles/input.module.css';

interface InputFieldProps {
  correctValue: string;
  onValidation: (isValid: boolean) => void;
}

const InputField: React.FC<InputFieldProps> = ({ correctValue, onValidation }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onValidation(inputValue === correctValue);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
      className={styles.inputs}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button className={styles.submit} type="submit">Submit</button>
    </form>
  );
};

export default InputField;
