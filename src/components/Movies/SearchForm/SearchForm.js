import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ToggleButton from "../ToggleButton/ToggleButton";

function SearchForm({ onSearchMovies, onToggleShortMovies, isShortMovies }) {
    const [searchRequest, setSearchRequest] = useState("");
    const [isRequestError, setRequestError] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const localQuery = localStorage.getItem("movieSearchQuery");
        if (location.pathname === "/movies" && localQuery) {
            setSearchRequest(localQuery);
        }
    }, [location]);

    const handleChangeSearchQuery = (evt) => {
        setSearchRequest(evt.target.value);
        setRequestError(false);
    };

    const handleSubmitSearch = (evt) => {
        evt.preventDefault();
        if (searchRequest.trim().length === 0) {
            setRequestError(true);
        } else {
            setRequestError(false);
            localStorage.setItem("movieSearchQuery", searchRequest);
            onSearchMovies(searchRequest);
        }
    };

    return (
        <section className="searchForm">
            <form
                className="searchForm__form"
                id="form"
                onSubmit={handleSubmitSearch}
                noValidate
            >
                <div className="searchForm__container">
                    <input
                        className="searchForm__input"
                        type="text"
                        name="query"
                        placeholder="Фильм"
                        required
                        onChange={handleChangeSearchQuery}
                        value={searchRequest || ""}
                    ></input>
                    <button
                        className="hover searchForm__button"
                        type="submit"
                    ></button>
                </div>
                {isRequestError ? (
                    <span className="searchForm__error">
                        Нужно ввести ключевое слово
                    </span>
                ) : (
                    ""
                )}
                <ToggleButton
                    onToggle={onToggleShortMovies}
                    isShortMovies={isShortMovies}
                />
            </form>
        </section>
    );
}

export default SearchForm;
