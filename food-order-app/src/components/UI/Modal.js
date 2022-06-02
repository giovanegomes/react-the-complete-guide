import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = ({ onClose }) => (
  <div className={styles.backdrop} onClick={onClose}>
  </div>
);

const ModalOverlay = ({ children }) => (
  <div className={styles.modal}>
    <div className={styles.content}>{children}</div>
  </div>
);

const Modal = ({ children, onClose }) => {
  const portalElement = document.getElementById('overlays');
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement,
      )}
    </>
  );
};

export default Modal;