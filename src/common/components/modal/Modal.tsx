// Import React
import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}


const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className={`bg-white rounded-lg shadow-lg p-6 w-full max-w-lg ${className}`}>
        <header className="flex justify-between items-center mb-4">
          {title && <h2 className="text-xl font-semibold">{title}</h2>}
          <button onClick={onClose} className="text-gray-500 hover:text-black text-xl font-bold">
            ×
          </button>
        </header>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
