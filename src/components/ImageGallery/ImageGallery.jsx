import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
    if (!images.length) return 0;

    return (
        <ul className={styles.list}>
            {images.map((image) => (
                <li key={image.id} className={styles.item}>
                    <ImageCard image={image} onClick={onImageClick} />
                </li>
        
            ))}
        </ul>

    );
};

export default ImageGallery;