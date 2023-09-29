import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../MoviesCard/MovieCard";
import Preloader from "../Preloader/Preloader";
import SearchMessage from "../SearchMessage/SearchMessage";
import MoreMovies from "../MoreMovies/MoreMovies";
import {
    SHOW_MORE_COUNTS,
    MEDIA_WIDTHS,
    ERROR_MESSAGES,
    SHOWN_MOVIES_COUNT,
    LOAD_MORE_WIDTHS,
} from "../../../utils/constants/constants";

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
    const totalMoviesCount = movieData.length;
    const { pathname } = useLocation();

    const calculateShownMoviesCount = () => {
        const width = window.innerWidth;
        if (width > MEDIA_WIDTHS.desktop) {
            setShownMoviesCount(SHOWN_MOVIES_COUNT.desktop);
        } else if (width > MEDIA_WIDTHS.tablet) {
            setShownMoviesCount(SHOWN_MOVIES_COUNT.tablet);
        } else if (width > MEDIA_WIDTHS.mobile) {
            setShownMoviesCount(SHOWN_MOVIES_COUNT.mobile);
        } else if (width > MEDIA_WIDTHS.smallMobile) {
            setShownMoviesCount(SHOWN_MOVIES_COUNT.smallMobile);
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
        if (width > LOAD_MORE_WIDTHS.desktop) {
            setShownMoviesCount(shownMoviesCount + SHOW_MORE_COUNTS.desktop);
        } else if (width > LOAD_MORE_WIDTHS.tablet) {
            setShownMoviesCount(shownMoviesCount + SHOW_MORE_COUNTS.tablet);
        } else if (width < LOAD_MORE_WIDTHS.tablet) {
            setShownMoviesCount(shownMoviesCount + SHOW_MORE_COUNTS.mobile);
        }
    };

    const getSavedMovie = (card) =>
        savedMovies.find((savedMovie) => savedMovie.movieId === card.id);

    return (
        <section className="movieCardList">
            {isLoading && <Preloader />}
            {!isLoading && isNoResults && (
                <SearchMessage errorMessage={ERROR_MESSAGES.noResults} />
            )}
            {!isLoading && isRequestError && (
                <SearchMessage errorMessage={ERROR_MESSAGES.requestError} />
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
                    {pathname !== "/saved-movies" &&
                        shownMoviesCount < totalMoviesCount && (
                            <MoreMovies onLoadMore={handleLoadMore} />
                        )}
                </>
            )}
        </section>
    );
}

export default MoviesCardList;
