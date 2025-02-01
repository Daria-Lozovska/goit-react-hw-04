import './App.css';
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchImages } from "./articles-api";  

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchGallery = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchImages(query, page);
        setImages((prev) => [...prev, ...data.results]);
      } catch {
        setError("Failed to fetch images");
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} image={selectedImage} />
    </div>
  );
}

export default App;