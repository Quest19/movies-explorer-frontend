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
                alt="постер к фильму"
            />
            <div className="movieCard__container">
                <div className="movieCard__text-container">
                    <p className="movieCard__text">33 слова о дизайне</p>
                    <h2 className="movieCard__time">1ч42м</h2>
                </div>
                <button
                    className={`hover movieCard__btn ${
                        isMoviesPage
                            ? "movieCard__btn_type_like"
                            : "movieCard__btn_type_delete"
                    }`}
                ></button>
            </div>
        </div>
    );
}

export default MovieCard;
