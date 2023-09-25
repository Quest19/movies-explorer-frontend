import React from "react";
import getTimeMovieFilter from "../../../utils/movieFilters/getTimeMovieFilter";

function MovieCard({
    card,
    isSavedMovies,
    onCardDelete,
    onCardLike,
    saved,
    savedMovies,
}) {
  
    function handleCardClick() {
        if (saved) {
            onCardDelete(savedMovies.filter((m) => m.movieId === card.id)[0]);
        } else {
            onCardLike(card);
        }
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }

    const cardSaveButtonClassName = `${
        saved ? "movieCard__btn movieCard__btn_type_like" : "movieCard__btn"
    }`;


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
                            : `https://api.nomoreparties.co/${card.image.url}`
                    }
                    alt={card.nameRU}
                />
            </a>
            <div className="movieCard__container">
                <div className="movieCard__text-container">
                    <h2 className="movieCard__text" title={card.nameRU} >{card.nameRU}</h2>
                    <p className="movieCard__time">
                        {getTimeMovieFilter(card.duration)}
                    </p>
                </div>
                {isSavedMovies ? (
                    <button
                        className={`hover movieCard__btn movieCard__btn_type_delete`}
                        type="button"
                        onClick={handleDeleteClick}
                    ></button>
                ) : (
                    <button
                        className={cardSaveButtonClassName}
                        type="button"
                        onClick={handleCardClick}
                    ></button>
                )}
            </div>
        </div>
    );
}

export default MovieCard;
