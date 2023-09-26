import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../MoviesCard/MovieCard";
import Preloader from "../Preloader/Preloader";
import SearchMessage from "../SearchMessage/SearchMessage";
import MoreMovies from "../MoreMovies/MoreMovies";

function MoviesCardList({
    movieData,
    isSavedMovies,
    isLoading,
    isRequestError,
    isNoResults,
    onCardLike,
    onCardDelete,
    savedMovies,
}) {
    const [shownMoviesCount, setShownMoviesCount] = useState(0);
    const { pathname } = useLocation();

    const showMoreCounts = {
        desktop: 4,
        tablet: 3,
        mobile: 2,
    };

    const calculateShownMoviesCount = () => {
        const width = window.innerWidth;
        if (width > 1156) {
            setShownMoviesCount(16);
        } else if (width > 866) {
            setShownMoviesCount(12);
        } else if (width > 724) {
            setShownMoviesCount(8);
        } else if (width > 400) {
            setShownMoviesCount(5);
        }
    };

    useEffect(() => {
        calculateShownMoviesCount();
        window.addEventListener("resize", calculateShownMoviesCount);
        return () => {
            window.removeEventListener("resize", calculateShownMoviesCount);
        };
    }, []);

    const handleLoadMore = () => {
        const width = window.innerWidth;
        if (width > 1180) {
            setShownMoviesCount(shownMoviesCount + showMoreCounts.desktop);
        } else if (width > 1023) {
            setShownMoviesCount(shownMoviesCount + showMoreCounts.tablet);
        } else if (width < 1023) {
            setShownMoviesCount(shownMoviesCount + showMoreCounts.mobile);
        } 
    };

    const getSavedMovie = (card) =>
        savedMovies.find((savedMovie) => savedMovie.movieId === card.id);

    return (
        <section className="movieCardList">
            {isLoading && <Preloader />}
            {!isLoading && isNoResults && (
                <SearchMessage errorMessage={"Ничего не найдено!"} />
            )}
            {!isLoading && isRequestError && (
                <SearchMessage
                    errorMessage={
                        "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
                    }
                />
            )}
            {!isLoading && !isRequestError && !isNoResults && (
                <>
                    <ul className="movieCardList__container">
                        {movieData
                            .slice(
                                0,
                                pathname === "/saved-movies"
                                    ? undefined
                                    : shownMoviesCount
                            )
                            .map((card) => (
                                <MovieCard
                                    key={isSavedMovies ? card._id : card.id}
                                    saved={getSavedMovie(card)}
                                    card={card}
                                    movieData={movieData}
                                    isSavedMovies={isSavedMovies}
                                    onCardLike={onCardLike}
                                    onCardDelete={onCardDelete}
                                    savedMovies={savedMovies}
                                />
                            ))}
                    </ul>
                    {pathname !== "/saved-movies" && (
                        <MoreMovies onLoadMore={handleLoadMore} />
                    )}
                </>
            )}
        </section>
    );
}

export default MoviesCardList;