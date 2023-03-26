// InputField.tsx
import React, { useState } from "react";
import styles from "../styles/input.module.css";

interface InputFieldProps {
  correctValue: string[];
  onValidation: (isValid: boolean) => void;
  id?: string;
  label?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  correctValue,
  onValidation,
  id,
  label,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const isValid = correctValue.includes(inputValue.trim().toLowerCase());
    onValidation(isValid);

  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={styles.inputs}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button className={styles.submit} type="submit">
        Submit
      </button>
    </form>
  );
};

export default InputField;
