import React from "react";
import { useLocation } from "react-router-dom";
import moviePicture from "../../../images/movie_pic.png";

function MovieCard() {
    const { pathname } = useLocation();
    const isMoviesPage = pathname === "/movies";
    return (
        <div className="movieCard">
            <img
                className="movieCard__img"
                src={moviePicture}
                alt="Обложка к фильму: «Название фильма»"
            />
            <div className="movieCard__container">
                <div className="movieCard__text-container">
                    <h2 className="movieCard__text">33 слова о дизайне</h2>
                    <p className="movieCard__time">1ч42м</p>
                </div>
                <button
                    className={`hover movieCard__btn ${
                        isMoviesPage
                            ? "movieCard__btn_type_like"
                            : "movieCard__btn_type_delete"
                    }`}
                    type="button"
                ></button>
            </div>
        </div>
    );
}

export default MovieCard;
