import styles from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
    return (
        <div onClick={() => onClick(image)} className={styles.div}>
            <img src={image.urls.small} alt={image.alt_description} className={styles.img} />
        </div>
    );
};

export default ImageCard;