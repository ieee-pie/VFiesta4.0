import React from 'react';
import Logo from './Logo';

const AlertModal = ({ isOpen, onClose, title, message }) => {
  // If the modal isn't open, don't render anything
  if (!isOpen) return null;

  return (
    // Backdrop - Fixed position, covers the whole screen, dark background
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center backdrop-blur-sm">
      
      {/* Modal Container */}
      <div className="bg-white rounded-xl shadow-2xl p-6 w-11/12 max-w-md transform transition-all duration-300 scale-100 opacity-100">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h3 className="text-xl font-bold text-gray-800"><Logo /></h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-150"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="text-xl font-bold text-gray-800">
          <p>{message}</p>
        </div>

        {/* Modal Footer (Action Button) */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-700 text-white font-semibold rounded-lg scale-100 hover:scale-105 transition-transform duration-200 shadow-md"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;