import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
    if (!image) return null;

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onClose} 
            contentLabel="Image Modal"
            className={styles.modal} 
            overlayClassName={styles.overlay}
        >
            <button onClick={onClose} className={styles.button}>Close</button>
            <img src={image.urls.regular} alt={image.alt_description} className={styles.img} />
            <p className={styles.author}>Author: {image.user.name}</p>
            <p className={styles.likes}>Likes: {image.likes}</p>
        </Modal>
    );
};

export default ImageModal;