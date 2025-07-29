import { useEffect } from "react";
import './Modal.css';
const Modal = ({ isOpen, onClose, title, children, footer }) => {
      // Close modal when pressing Escape key
      useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'Escape') {
            onClose();
          }
        };
        
        if (isOpen) {
          document.addEventListener('keydown', handleKeyDown);
        }
        
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, [isOpen, onClose]);
      
      // Prevent body scroll when modal is open
      useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }, [isOpen]);
      
      // Close modal when clicking outside
      const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      };
      return (
        isOpen && (
            <div 
          className={`modal-container ${isOpen ? 'show' : 'none'}`}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal">
            <div className="modal-header">
              <h2 id="modal-title" className="modal-title">{title}</h2>
              <button 
                className="modal-close" 
                onClick={onClose}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>
            <div className="modal-content">
              {children}
            </div>
            {footer && <div className="modal-footer">{footer}</div>}
          </div>
        </div>
        )
      );
    };

    export default Modal;