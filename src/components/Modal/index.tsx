import { ReactNode } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  setIsOpen(): void;
  children: ReactNode;
}

export function Modal({ isOpen, setIsOpen, children }: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={setIsOpen}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          width: '736px',
          marginRight: '-50%',
          border: 'none',
          borderRadius: '8px',
          transform: 'translate(-50%, -50%)',
          color: '#000000',
          background: '#F0F0F5',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
}
