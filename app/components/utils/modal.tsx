import React, { ReactNode } from 'react'
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
  }
const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-lg w-full transition-transform transform scale-95 hover:scale-100">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 font-bold text-lg"
        >
          ×
        </button>
        <div>{children}</div>
      </div>
    </div>
    );
}

export default Modal