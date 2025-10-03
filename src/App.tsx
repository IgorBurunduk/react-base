import { Route, Routes } from 'react-router';

import { MainLayout } from '@/layout/layout';
import { TeacherModalRoute } from '@/routes/teacher-modal-route';

import './styles/index.scss';

function NotFound() {
  return null;
}

export const App = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route path="teacher">
        <Route path=":id" element={<TeacherModalRoute />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
