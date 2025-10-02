import { type PropsWithChildren, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { CloseIcon } from '@/assets/icons';
import { Button } from '@/components/button';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useWindowSize } from '@/hooks/useWindowSize';

import styles from './modal.module.scss';

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const { isMobile } = useWindowSize();
  const { lockScroll, unlockScroll } = useScrollLock();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      lockScroll();
      return;
    }

    unlockScroll();
  }, [isOpen, lockScroll, unlockScroll]);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className={styles.backdrop} onClick={onClose} aria-hidden="true" />

      <div className={styles.content}>
        {children}

        <Button
          onClick={onClose}
          className={styles.close}
          aria-label="Закрыть модальное окно"
          buttonRef={closeButtonRef}
        >
          {isMobile ? (
            <span className={styles.icon}>
              <CloseIcon />
            </span>
          ) : (
            'Закрыть'
          )}
        </Button>
      </div>
    </div>,
    document.body,
  );
};
