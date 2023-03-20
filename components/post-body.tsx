import React, { useState } from 'react';

import markdownStyles from './markdown-styles.module.css'
import InputField from './input-field';

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  const [validationMessage, setValidationMessage] = useState('');

  const handleValidation = (isValid: boolean) => {
    if (isValid) {
      setValidationMessage('The input is correct!');
    } else {
      setValidationMessage('The input is incorrect.');
    }
  };
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
        <h1>Input Validation Example</h1>
      <InputField correctValue="correct" onValidation={handleValidation} />
      <p>{validationMessage}</p>
    </div>
  )
}

export default PostBody
