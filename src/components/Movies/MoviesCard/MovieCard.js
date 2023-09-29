import React from "react";
import getTimeMovieFilter from "../../../utils/movieFilters/getTimeMovieFilter";
import { IMAGE_URL_PREFIX } from "../../../utils/constants/constants";

function MovieCard({
    card,
    isSavedMovies,
    onCardDelete,
    onCardLike,
    saved,
    savedMovies,
}) {
    const handleCardClick = () => {
        if (saved) {
            const savedMovie = savedMovies.find((m) => m.movieId === card.id);
            onCardDelete(savedMovie);
        } else {
            onCardLike(card);
        }
    };

    const handleDeleteClick = () => {
        onCardDelete(card);
    };

    return (
        <div className="movieCard">
            <a
                href={card.trailerLink}
                className="movieCard__trailer"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className="movieCard__img"
                    src={
                        isSavedMovies
                            ? card.image
                            : `${IMAGE_URL_PREFIX}${card.image.url}`
                    }
                    alt={card.nameRU}
                />
            </a>
            <div className="movieCard__container">
                <div className="movieCard__text-container">
                    <h2 className="movieCard__text" title={card.nameRU}>
                        {card.nameRU}
                    </h2>
                    <p className="movieCard__time">
                        {getTimeMovieFilter(card.duration)}
                    </p>
                </div>
                {isSavedMovies ? (
                    <button
                        className="hover movieCard__btn movieCard__btn_type_delete"
                        type="button"
                        onClick={handleDeleteClick}
                    ></button>
                ) : (
                    <button
                        className={`movieCard__btn ${
                            saved ? "movieCard__btn_type_like" : ""
                        }`}
                        type="button"
                        onClick={handleCardClick}
                    ></button>
                )}
            </div>
        </div>
    );
}

export default MovieCard;
