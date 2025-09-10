import { useId } from 'react';
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { Input } from '@/components/input/input';

interface FormInputProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  error?: string;
  autoCompleteInput?: boolean;
  additionalClassname?: string;
  register: UseFormRegister<T>;
}

export const FormInput = <T extends FieldValues>({
  name,
  label,
  placeholder,
  error,
  register,
  autoCompleteInput,
  additionalClassname,
}: FormInputProps<T>) => {
  return (
    <Input
      id={useId()}
      label={label}
      placeholder={placeholder}
      error={error}
      additionalClassname={additionalClassname}
      autoCompleteInput={autoCompleteInput}
      register={register(name)}
    />
  );
};
