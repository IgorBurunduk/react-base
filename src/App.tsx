import { BrowserRouter, Route, Routes } from 'react-router';

import { Layout } from '@/components/layout';
import { MainPage } from '@/pages/main-page';
import { TeacherPage } from '@/pages/teacher-page';

import './styles/index.scss';

function NotFound() {
  return null;
}

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />}>
          <Route path="teacher/:id" element={<TeacherPage />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
