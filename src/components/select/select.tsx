import { useRef, useState } from 'react';

import { ArrowDownIcon } from '@/assets/icons';
import { Button } from '@/components/button';
import { useOutsideClick } from '@/hooks/useOutsideClick';

import styles from './select.module.scss';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: Option;
  onChange: (option: Option) => void;
  additionalClassname?: string;
}

export const Select = ({ options, value, onChange, additionalClassname }: SelectProps) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const selectRef = useRef(null);
  const buttonRef = useRef(null);

  const handleSelectToggle = () => {
    isSelectOpen ? setIsSelectOpen(false) : setIsSelectOpen(true);
  };

  const handleSelectClose = () => {
    setIsSelectOpen(false);
  };

  const createSelectHandler = (option: Option) => () => {
    onChange(option);
    handleSelectClose();
  };

  useOutsideClick({
    ref: selectRef,
    handler: handleSelectClose,
    condition: isSelectOpen,
    exceptElementRef: buttonRef,
  });

  const createSelectClassName = `${styles.select} ${additionalClassname ? additionalClassname : ''}`;

  const createArrowIconClassname = `${styles.dropdownArrow} ${isSelectOpen ? styles.open : ''}`;

  const createOptionClassname = (optionValue: string) => {
    return `${styles.option} ${optionValue === value.value ? styles.activeOption : ''}`;
  };

  return (
    <div className={createSelectClassName} ref={selectRef}>
      <Button
        variant="primary"
        additionalClassname={styles.button}
        buttonRef={buttonRef}
        onClick={handleSelectToggle}
        aria-haspopup="listbox"
        aria-expanded={isSelectOpen}
        aria-controls="custom-select-listbox"
        id="custom-select-button"
        type="button"
      >
        {value.label}
        <span className={createArrowIconClassname}>
          <ArrowDownIcon />
        </span>
      </Button>

      {isSelectOpen && (
        <div
          className={styles.dropdown}
          id="custom-select-listbox"
          role="listbox"
          aria-labelledby="custom-select-button"
        >
          {options.map((option) => (
            <Button
              variant="text"
              key={option.value}
              role="option"
              aria-selected={option.value === value.value}
              onClick={createSelectHandler(option)}
              additionalClassname={createOptionClassname(option.value)}
              type="button"
            >
              {option.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
