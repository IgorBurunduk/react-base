import { type FormHTMLAttributes } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type * as yup from 'yup';

import { Button } from '@/components/button/button';
import { FormInput } from '@/components/input/components/form-input/form-input';
import { ContactFormSchema } from '@/helpers/schema';

import styles from './contact-form.module.scss';

interface ContactFormProps extends FormHTMLAttributes<HTMLFormElement> {
  additionalClassname?: string;
}

type ContactFormData = yup.InferType<typeof ContactFormSchema>;

export const ContactForm = ({ additionalClassname, ...rest }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(ContactFormSchema),
  });

  const handleContactFormSubmit = (data: ContactFormData) => {
    console.log('Отправленные данные:', data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleContactFormSubmit)}
      className={`${styles.contactForm} ${Boolean(additionalClassname) && additionalClassname}`}
      {...rest}
    >
      <FormInput
        label={'Введите имя'}
        placeholder={'Имя'}
        name={'name'}
        register={register}
        error={errors.name?.message}
        autoCompleteInput={true}
      />
      <FormInput
        label={'Введите телефон'}
        placeholder={'Телефон'}
        name={'phone'}
        register={register}
        error={errors.phone?.message}
        autoCompleteInput={true}
      />
      <FormInput
        label={'Введите Email'}
        placeholder={'E-mail'}
        name={'email'}
        register={register}
        error={errors.email?.message}
        autoCompleteInput={true}
      />
      <Button variant={'secondary'} additionalClassname={styles.contactFormButton}>
        Оформить заявку
      </Button>
    </form>
  );
};
