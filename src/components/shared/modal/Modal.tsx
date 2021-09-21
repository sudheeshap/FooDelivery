import React, { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  ModalBody,
  ModalButtonIconClose,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from './Modal.styles';
import { ModalProps } from './Modal.interface';

const Modal: FC<ModalProps> = ({
  title,
  isOpen,
  children,
  onAfterOpen,
  onRequestClose,
}) => {
  useEffect(() => {
    /**
     * Handle escape key
     */
    const handleEscape = (event: KeyboardEvent) => {
      if (event.keyCode !== 27) {
        return;
      }

      // Confirm modal close
      onRequestClose();
    };

    window.addEventListener('keydown', handleEscape);

    if (!isOpen) {
      return;
    }
    onAfterOpen();

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onAfterOpen, onRequestClose]);

  return isOpen
    ? createPortal(
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <span>{title}</span>

              <ModalButtonIconClose
                type="button"
                size="sm"
                color="default"
                onClick={() => onRequestClose}
              >
                <i className="bi-x-circle-fill" />
              </ModalButtonIconClose>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </ModalContent>
        </ModalOverlay>,
        document.getElementById('modal__wrapper') as Element,
      )
    : null;
};

Modal.defaultProps = {
  title: '',
  onAfterOpen: () => {},
};

// Modal.propTypes = {
//   title: PropTypes.string,
//   isOpen: PropTypes.bool.isRequired,
//   children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
//   onAfterOpen: PropTypes.func.isRequired,
//   onRequestClose: PropTypes.func.isRequired,
// };
