import { Outlet } from 'react-router';

import { Layout } from '@/components/layout';
import { MainPage } from '@/pages/main-page';

export const MainLayout = () => {
  return (
    <Layout>
      <MainPage />
      <Outlet />
    </Layout>
  );
};
