import styles from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({ onLoadMore }) => (
    <button onClick={onLoadMore} className={styles.button}>
        Load more
    </button>
)

export default LoadMoreBtn;