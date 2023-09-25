import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoviesApi from "../../utils/MoviesApi";
import getFilterMovies from "../../utils/movieFilters/getFilterMovies";
import getShortFilmsFilter from "../../utils/movieFilters/getShortFilmsFilter";

function Movies({ savedMovies, onCardDelete, onCardLike }) {
    const [isLoadingMovies, setIsLoadingMovies] = useState(false);
    const [initialMovieData, setInitialMovieData] = useState([]);
    const [filteredMovieData, setFilteredMovieData] = useState([]);
    const [isShortMovieData, setIsShortMovieData] = useState(false);
    const [isRequestErrorMovies, setIsRequestErrorMovies] = useState(false);
    const [isNoResultsMovies, setIsNoResultsMovies] = useState(false);

    function handleFilterMovieData(movies, query, short) {
        const movieDataList = getFilterMovies(movies, query);
        setInitialMovieData(movieDataList);
        setFilteredMovieData(short ? getShortFilmsFilter(movieDataList) : movieDataList);
        localStorage.setItem("movieData", JSON.stringify(movieDataList));
        localStorage.setItem('allMovies', JSON.stringify(movies));
    }

    function handleToggleShortMovies() {
      setIsShortMovieData(!isShortMovieData);
      const filtered = !isShortMovieData ? getShortFilmsFilter(initialMovieData) : initialMovieData;
      setFilteredMovieData(filtered);
      localStorage.setItem("shortMoviesEnabled", !isShortMovieData);
      console.log(filtered);
  }


    function onSearchMovies(query) {
        setIsLoadingMovies(true);
        localStorage.setItem("movieSearchQuery", query);
        localStorage.setItem("shortMoviesEnabled", isShortMovieData);
        MoviesApi.getMovies()
            .then((movieData) => {
                handleFilterMovieData(movieData, query, isShortMovieData);
                setIsRequestErrorMovies(false);
                setIsNoResultsMovies(movieData.length === 0);
            })
            .catch((err) => {
                setIsRequestErrorMovies(true);
                console.error(err);
            })
            .finally(() => {
                setIsLoadingMovies(false);
            });
    }

    useEffect(() => {
        if (localStorage.getItem("shortMoviesEnabled") === "true") {
            setIsShortMovieData(true);
        } else {
            setIsShortMovieData(false);
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem("movieData")) {
            const movieData = JSON.parse(localStorage.getItem("movieData"));
            setInitialMovieData(movieData);
            const filtered = localStorage.getItem("shortMoviesEnabled") === "true" ? getShortFilmsFilter(movieData) : movieData;
            setFilteredMovieData(filtered);
        }
    }, []);

    useEffect(() => {
        setIsNoResultsMovies(filteredMovieData.length === 0);
    }, [filteredMovieData]);

    return (
        <main>
            <SearchForm
                onSearchMovies={onSearchMovies}
                onToggleShortMovies={handleToggleShortMovies}
                isShortMovies={isShortMovieData}
            />
            <MoviesCardList
                movieData={filteredMovieData}
                isSavedMovies={false}
                isLoading={isLoadingMovies}
                isRequestError={isRequestErrorMovies}
                isNoResults={isNoResultsMovies}
                savedMovies={savedMovies}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
            />
        </main>
    );
}

export default Movies;