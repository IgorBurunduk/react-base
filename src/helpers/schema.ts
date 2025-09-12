import * as yup from 'yup';

export const ContactFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('Имя обязательно')
    .matches(/^[А-Яа-яЁё\s]+$/, 'Только русские буквы')
    .min(2, 'Минимум 2 символа'),
  phone: yup
    .string()
    .required('Телефон обязателен')
    .matches(/^(\+7|8)\d{10}$/, 'Введите номер телефона в формате: +7XXXXXXXXXX'),
  email: yup
    .string()
    .required('Email обязателен')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Введите корректный email'),
});
