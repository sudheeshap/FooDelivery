import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { createPortal } from 'react-dom';

import {
  ModalBody,
  ModalButtonIconClose,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from './Modal.styles';

export default function Modal({
  title,
  isOpen,
  children,
  onAfterOpen,
  onRequestClose,
}) {
  /**
   * Handle escape key
   */
  const handleEscape = (event) => {
    if (event.keyCode !== 27) {
      return;
    }

    // Confirm modal close
    onRequestClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);

    if (!isOpen) {
      return null;
    }
    onAfterOpen();

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

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
                onClick={onRequestClose}
              >
                <i className="bi-x-circle-fill" />
              </ModalButtonIconClose>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </ModalContent>
        </ModalOverlay>,
        document.getElementById('modal__wrapper'),
      )
    : null;
}

Modal.defaultProps = {
  title: '',
  onAfterOpen: () => {},
};

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  onAfterOpen: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};
