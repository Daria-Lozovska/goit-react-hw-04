import { useState } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleChange = (e) => setQuery(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === "") {
            toast.error("please enter search term")
            return;
        }
        onSearch(query);
        setQuery("");
    };

        return (
        <header className={styles.header}>
           <form className={styles.form} onSubmit={handleSubmit}>
             <input
               type="text"
               autoComplete="off"
               autoFocus
               placeholder="Search images and photos"
               className={styles.input}  
               value={query}
               onChange={handleChange}         
            />
            <button type="submit" className={styles.button}>Search</button>
           </form>
        </header>
        )
    }

export default SearchBar;