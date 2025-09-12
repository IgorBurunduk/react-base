import { forwardRef, type InputHTMLAttributes } from 'react';

import styles from './input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  additionalClassname?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, additionalClassname, ...rest }, forwardedInput) => {
    const inputId = rest.id || rest.name;
    const createInputClassNames = () => {
      let inputClass = styles.input;

      if (additionalClassname) {
        inputClass = `${styles.input} ${additionalClassname}`;
      }

      if (error) {
        inputClass = `${styles.input} ${styles.error}`;
      }
      return inputClass;
    };

    return (
      <span className={styles.wrapper}>
        {Boolean(rest.label) && (
          <label className={styles.label} htmlFor={inputId}>
            {rest.label}
          </label>
        )}
        <input id={inputId} className={createInputClassNames()} ref={forwardedInput} {...rest} />
        {error && <span className={styles.errorText}>{error}</span>}
      </span>
    );
  },
);

Input.displayName = 'Input';

export { Input };
