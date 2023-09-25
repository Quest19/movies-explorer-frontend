import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ToggleButton from "../ToggleButton/ToggleButton";

function SearchForm({ onSearchMovies, onToggleShortMovies, isShortMovies }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isQueryError, setIsQueryError] = useState(false);
  const location = useLocation();

  function handleChangeSearchQuery(e) {
      setSearchQuery(e.target.value);
  }

  function handleSubmitSearch(evt) {
      evt.preventDefault();
      if (searchQuery.trim().length === 0) {
          setIsQueryError(true);
      } else {
          setIsQueryError(false);
          onSearchMovies(searchQuery);
      }
  }

  useEffect(() => {
      if (
          location.pathname === "/movies" &&
          localStorage.getItem("movieSearchQuery")
      ) {
          const localQuery = localStorage.getItem("movieSearchQuery");
          setSearchQuery(localQuery);
      }
  }, [location]);

  return (
      <section className="searchForm">
          <form
              className="searchForm__form"
              id="form"
              onSubmit={handleSubmitSearch}
          >
              <div className="searchForm__container">
                  <input
                      className="searchForm__input"
                      type="text"
                      name="query"
                      placeholder="Фильм"
                      required
                      onChange={handleChangeSearchQuery}
                      value={searchQuery || ""}
                  ></input>
                  <button
                      className="hover searchForm__button"
                      type="submit"
                  ></button>
              </div>
              <ToggleButton
                  onToggle={onToggleShortMovies}
                  isShortMovies={isShortMovies}
              />
              {isQueryError && (
                  <span className="searchForm__error">
                      Нужно ввести ключевое слово
                  </span>
              )}
          </form>
      </section>
  );
}

export default SearchForm;
