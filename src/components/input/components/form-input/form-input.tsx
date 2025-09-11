import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { Input } from '@/components/input/input';

interface FormInputProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  error?: string;
  additionalClassname?: string;
  register: UseFormRegister<T>;
}

export const FormInput = <T extends FieldValues>({
  name,
  label,
  placeholder,
  error,
  register,
  additionalClassname,
}: FormInputProps<T>) => {
  return (
    <Input
      id={name}
      label={label}
      placeholder={placeholder}
      error={error}
      additionalClassname={additionalClassname}
      {...register(name)}
    />
  );
};
