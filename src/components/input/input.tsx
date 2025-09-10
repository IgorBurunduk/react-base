import styles from './input.module.scss';

export const Input = () => {
  return (
    <div className={`${styles.inputWrapper}`}>
      <input name="Name" type="text" className={`${styles.inputText}`} placeholder="Имя" />
      <span className={`${styles.inputError}`}>Какая-то ошибка</span>
    </div>
  );
};
