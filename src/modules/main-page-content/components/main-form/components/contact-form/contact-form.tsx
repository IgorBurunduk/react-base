import type { FormHTMLAttributes } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/button/button';
import { Input } from '@/components/input/input';

import styles from './contact-form.module.scss';

interface ContactFormProps extends FormHTMLAttributes<HTMLFormElement> {
  additionalClassname?: string;
}

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
}


export const ContactForm = ({ additionalClassname, children, ...rest }: ContactFormProps) => {
  const {
    handleSubmit,
  } = useForm<ContactFormValues>();
  const handleContactFormSubmit: SubmitHandler<ContactFormValues> = (data: ContactFormValues) => {
    console.log('Отправленные данные:', data);
  };
  return (
    <form
      onSubmit={handleSubmit(handleContactFormSubmit)}
      {...rest}
      className={`${styles.contactForm} ${Boolean(additionalClassname) && additionalClassname}`}
    >
      <Input />
      <Input />
      <Input />
      <Button variant={'secondary'}>Оформить заявку</Button>
    </form>
  );
};
