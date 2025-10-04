import { Outlet } from 'react-router';

import { Footer } from './components/footer';
import { Header } from './components/header';

import styles from './layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
