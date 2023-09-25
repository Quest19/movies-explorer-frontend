import { useState, useEffect } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MovieCardList from "../Movies/MoviesCardList/MoviesCardList";
import getFilterMovies from "../../utils/movieFilters/getFilterMovies";
import getShortFilmsFilter from "../../utils/movieFilters/getShortFilmsFilter";

function SavedMovies({ savedMovies, onCardDelete }) {
  const [filteredSavedMovies, setFilteredSavedMovies] = useState(savedMovies);
  const [isShortSavedMovies, setIsShortSavedMovies] = useState(false);
  const [isNoResultsSavedMovies, setIsNoResultsSavedMovies] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function onSearchMovies(query) {
      setSearchQuery(query);
  }

  function handleToggleShortSavedMovies() {
      setIsShortSavedMovies(!isShortSavedMovies);
  }

  useEffect(() => {
      const savedMoviesList = getFilterMovies(savedMovies, searchQuery);
      setFilteredSavedMovies(
          isShortSavedMovies ? getShortFilmsFilter(savedMoviesList) : savedMoviesList
      );
  }, [savedMovies, isShortSavedMovies, searchQuery]);

  useEffect(() => {
      setIsNoResultsSavedMovies(filteredSavedMovies.length === 0);
  }, [filteredSavedMovies]);

  return (
      <main>
          <div className="savedItems">
              <SearchForm
                  onSearchMovies={onSearchMovies}
                  onToggleShortMovies={handleToggleShortSavedMovies}
              />
              <MovieCardList
                  isNoResults={isNoResultsSavedMovies}
                  isSavedMovies={true}
                  movieData={filteredSavedMovies}
                  savedMovies={savedMovies}
                  onCardDelete={onCardDelete}
              />
          </div>
      </main>
  );
}

export default SavedMovies;
