import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { ContactFormSchema } from '@/helpers/schema';

import styles from './contact-form.module.scss';

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
};

export const ContactForm = () => {
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
    <form onSubmit={handleSubmit(handleContactFormSubmit)} className={styles.contactForm}>
      <Input
        label="Введите имя"
        placeholder="Имя"
        error={errors.name?.message}
        {...register('name')}
      />
      <Input
        label="Введите телефон"
        placeholder="Телефон"
        error={errors.phone?.message}
        {...register('phone')}
      />
      <Input
        label="Введите Email"
        placeholder="E-mail"
        error={errors.email?.message}
        {...register('email')}
      />
      <Button variant={'secondary'} additionalClassname={styles.contactFormButton}>
        Оформить заявку
      </Button>
    </form>
  );
};
