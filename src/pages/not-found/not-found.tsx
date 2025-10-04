import { Link } from 'react-router';

import styles from './not-found.module.scss';

export const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <h1 className={styles.title}>Ошибка 404. Ничего не найдено.</h1>
      <p className={styles.description}>
        Попробуйте начать с <Link to="/">главной</Link>
      </p>
    </section>
  );
};
