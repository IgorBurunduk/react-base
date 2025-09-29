import { teachersImages } from '@/assets/images';
import { Link } from '@/components/link';
import type { TeacherType } from '@/types/teacher';

import styles from './teacher-modal.module.scss';

interface TeacherModalProps {
  teacherContent: TeacherType;
}

export const TeacherModal = (teacherContent: TeacherModalProps) => {
  const { id, name, imageSrc, description, links, tabs } = teacherContent.teacherContent;

  const teacherImageSrc = teachersImages[imageSrc as keyof typeof teachersImages];

  return (
    <div className={styles.teacherModal}>
      <div className={styles.teacherInfo}>
        <img className={styles.teacherPhoto} src={teacherImageSrc} alt={name} />
        <h3 id="modal-title" className={styles.teacherName}>
          {name}
        </h3>
        <p className={styles.teacherDescription}>{description}</p>
        <div className={styles.teacherLinks}>
          {links.map((link, index) => (
            <Link href={link.href} key={index} additionalClassname={styles.teacherLink}>
              <img src={link.imagePath} alt="" />
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.teacherTabs}>
        {tabs.map((tab, index) => (
          <div key={index}>{tab.title}</div>
        ))}
      </div>
    </div>
  );
};
