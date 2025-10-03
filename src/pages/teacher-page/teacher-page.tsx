import { useNavigate, useParams } from 'react-router';

import { Modal } from '@/components/modal';

import { TeacherModalContent } from './components/teacher-modal-content';

export const TeacherPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleModalClose = () => {
    document.body.style.overflow = '';
    navigate(-1);
  };

  return (
    <Modal isOpen onClose={handleModalClose}>
      <TeacherModalContent teacherId={Number(id)} />
    </Modal>
  );
};
