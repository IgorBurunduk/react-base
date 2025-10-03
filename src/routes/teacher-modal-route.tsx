import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { getTeacherById } from '@/api/mock-api';
import { Modal } from '@/components/modal';
import { useScrollLock } from '@/hooks/useScrollLock';
import { TeacherModalContent } from '@/modules/main-page-content/components/main-teachers/components/teacher-item/components/teacher-modal-content';
import type { TeacherType } from '@/types/teacher';

export const TeacherModalRoute = () => {
  const [teacher, setTeacher] = useState<TeacherType>();

  const { id } = useParams();
  const navigate = useNavigate();

  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (Number(id)) {
      getTeacherById(Number(id)).then((data) => {
        setTeacher(data);
      });

      lockScroll();
    }
  }, [id, lockScroll]);

  if (!teacher) {
    return null;
  }

  const handleModalClose = () => {
    navigate(-1);
    unlockScroll();
  };

  return (
    <Modal isOpen onClose={handleModalClose}>
      <TeacherModalContent teacherId={teacher.id} />
    </Modal>
  );
};
