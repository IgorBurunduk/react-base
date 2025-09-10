import { type InputHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import styles from './input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  error?: string;
  placeholder?: string;
  autoCompleteInput?: boolean;
  additionalClassname?: string;
  register: UseFormRegisterReturn;
}

export const Input = ({
  label,
  id,
  error,
  placeholder,
  autoCompleteInput,
  additionalClassname,
  register,
  ...rest
}: InputProps) => {
  const inputId = id || rest.name;
  const createInputClassNames = () => {
    let inputTextClass = styles.inputText;

    if (additionalClassname) {
      inputTextClass = `${styles.inputText} ${additionalClassname}`;
    }

    if (error) {
      inputTextClass = `${styles.inputText} ${styles.inputTextError}`;
    }

    return inputTextClass;
  };

  return (
    <div className={`${styles.inputWrapper}`}>
      {Boolean(label) && (
        <label className={`${styles.inputLabel}`} htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={createInputClassNames()}
        placeholder={placeholder}
        autoComplete={autoCompleteInput ? 'on' : 'off'}
        {...register}
        {...rest}
      />
      {error && <span className={`${styles.inputError}`}>{error}</span>}
    </div>
  );
};
