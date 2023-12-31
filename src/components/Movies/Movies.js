import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoviesApi from "../../utils/MoviesApi";
import getFilterMovies from "../../utils/movieFilters/getFilterMovies";
import getShortFilmsFilter from "../../utils/movieFilters/getShortFilmsFilter";
import { LOCAL_STORAGE_KEYS } from "../../utils/constants/constants";

function Movies({ savedMovies, onCardDelete, onCardLike }) {
    const [isLoadingMovies, setIsLoadingMovies] = useState(false);
    const [initialMovieData, setInitialMovieData] = useState([]);
    const [filteredMovieData, setFilteredMovieData] = useState([]);
    const [isShortMovieData, setIsShortMovieData] = useState(false);
    const [isRequestErrorMovies, setIsRequestErrorMovies] = useState(false);
    const [isNoResultsMovies, setIsNoResultsMovies] = useState(false);

    useEffect(() => {
        const storedMovieData = JSON.parse(
            localStorage.getItem(LOCAL_STORAGE_KEYS.movieData)
        );
        const shortMoviesEnabled =
            localStorage.getItem(LOCAL_STORAGE_KEYS.shortMoviesEnabled) ===
            "true";

        if (storedMovieData) {
            setInitialMovieData(storedMovieData);
            setIsShortMovieData(shortMoviesEnabled);

            const filtered = shortMoviesEnabled
                ? getShortFilmsFilter(storedMovieData)
                : storedMovieData;
            setFilteredMovieData(filtered);
        }
    }, []);

    useEffect(() => {
        setIsNoResultsMovies(filteredMovieData.length === 0);
    }, [filteredMovieData]);

    const handleFilterMovieData = (movies, query, short) => {
        const movieDataList = getFilterMovies(movies, query);
        setInitialMovieData(movieDataList);
        setFilteredMovieData(
            short ? getShortFilmsFilter(movieDataList) : movieDataList
        );
        localStorage.setItem(
            LOCAL_STORAGE_KEYS.movieData,
            JSON.stringify(movieDataList)
        );
        localStorage.setItem(
            LOCAL_STORAGE_KEYS.allMovies,
            JSON.stringify(movies)
        );
    };

    const handleToggleShortMovies = () => {
        const newShortMoviesEnabled = !isShortMovieData;
        setIsShortMovieData(newShortMoviesEnabled);
        localStorage.setItem(
            LOCAL_STORAGE_KEYS.shortMoviesEnabled,
            newShortMoviesEnabled
        );

        const filtered = newShortMoviesEnabled
            ? getShortFilmsFilter(initialMovieData)
            : initialMovieData;
        setFilteredMovieData(filtered);
    };

    const onSearchMovies = (query) => {
        setIsLoadingMovies(true);
        localStorage.setItem(LOCAL_STORAGE_KEYS.movieSearchQuery, query);
        localStorage.setItem(
            LOCAL_STORAGE_KEYS.shortMoviesEnabled,
            isShortMovieData
        );

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
    };

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
