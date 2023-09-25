import { useState, useEffect } from "react";
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

    const desktopShowMoreCount = 4;
    const tabletShowMoreCount = 3;
    const mobileShowMoreCount = 2;
    const mobileShowMoreCountMini = 1;

    function calculateShownMoviesCount() {
        const windowWidth = window.innerWidth;
        if (windowWidth > 1156) {
            setShownMoviesCount(16);
        } else if (windowWidth > 865) {
            setShownMoviesCount(12);
        } else if (windowWidth > 724) {
            setShownMoviesCount(8);
        } else if (windowWidth < 400) {
            setShownMoviesCount(5);
        }
    }

    useEffect(() => {
        calculateShownMoviesCount();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener("resize", calculateShownMoviesCount);
        }, 500);
    });

    function handleLoadMore() {
        const windowWidth = window.innerWidth;
        if (windowWidth > 1180) {
            setShownMoviesCount(shownMoviesCount + desktopShowMoreCount);
        } else if (windowWidth > 1023) {
            setShownMoviesCount(shownMoviesCount + tabletShowMoreCount);
        } else if (windowWidth < 1023) {
            setShownMoviesCount(shownMoviesCount + mobileShowMoreCount);
        } else if (windowWidth > 700) {
          setShownMoviesCount(shownMoviesCount + mobileShowMoreCountMini);
        }
    }

    function getSavedMovie(savedMovies, card) {
        return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
    }

    return (
        <section className="movieCardList">
            {isLoading && <Preloader />}
            {isNoResults && !isLoading && (
                <SearchMessage errorMessage={"Ничего не найдено!"} />
            )}
            {isRequestError && !isLoading && (
                <SearchMessage
                    errorMessage={
                        "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
                    }
                />
            )}
            {!isLoading && !isRequestError && !isNoResults && (
                <>
                    {pathname === "/saved-movies" ? (
                        <>
                            <ul className="movieCardList__container">
                                {movieData.map((card) => (
                                    <MovieCard
                                        key={isSavedMovies ? card._id : card.id}
                                        saved={getSavedMovie(savedMovies, card)}
                                        card={card}
                                        movieData={movieData}
                                        isSavedMovies={isSavedMovies}
                                        onCardLike={onCardLike}
                                        onCardDelete={onCardDelete}
                                        savedMovies={savedMovies}
                                    />
                                ))}
                            </ul>
                        </>
                    ) : (
                        <>
                            <ul className="movieCardList__container">
                                {movieData
                                    .slice(0, shownMoviesCount)
                                    .map((card) => (
                                        <MovieCard
                                            key={
                                                isSavedMovies
                                                    ? card._id
                                                    : card.id
                                            }
                                            saved={getSavedMovie(
                                                savedMovies,
                                                card
                                            )}
                                            card={card}
                                            movieData={movieData}
                                            isSavedMovies={isSavedMovies}
                                            onCardLike={onCardLike}
                                            onCardDelete={onCardDelete}
                                            savedMovies={savedMovies}
                                        />
                                    ))}
                            </ul>
                            <MoreMovies onLoadMore={handleLoadMore} />
                        </>
                    )}
                </>
            )}
        </section>
    );
}

export default MoviesCardList;
