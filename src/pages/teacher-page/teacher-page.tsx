import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { Modal } from '@/components/modal';

import { TeacherModalContent } from './components/teacher-modal-content';

export const TeacherPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(true);

  const handleModalClose = () => {
    setIsOpenModal(false);
    navigate(-1);
  };

  return (
    <Modal isOpen={isOpenModal} onClose={handleModalClose}>
      <TeacherModalContent teacherId={Number(id)} />
    </Modal>
  );
};
