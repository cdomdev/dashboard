interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalTitle: string;
  modalContent?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  modalTitle,
  modalContent,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="popup-modal"
      className="fixed top-0 right-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black/30"
    >
      <div className="relative p-1 w-full max-w-md max-h-full bg-white rounded-lg">
        <div className="relative bg-white rounded-lg">
          <button
            onClick={onClose}
            type="button"
            className="absolute top-1 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center cursor-pointer"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-1 text-center">
            <h3 className="mb-2 text-lg text-gray-800 font-semibold">
              {modalTitle}
            </h3>
            {modalContent && <p className="text-black pt-2 text-balance text-base">{modalContent}</p>}
            <div className="p-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
