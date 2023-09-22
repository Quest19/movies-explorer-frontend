import MovieCard from "../MoviesCard/MovieCard";

function MoviesCardList() {
    return (
        <section className="movieCardList">
            <ul className="movieCardList__container">
              <li className="movieCardList__card"><MovieCard /></li>
              <li className="movieCardList__card"><MovieCard /></li>
              <li className="movieCardList__card"><MovieCard /></li>
              <li className="movieCardList__card"><MovieCard /></li>
              <li className="movieCardList__card"><MovieCard /></li>
              <li className="movieCardList__card"><MovieCard /></li>
              <li className="movieCardList__card"><MovieCard /></li>
              <li className="movieCardList__card"><MovieCard /></li>
              <li className="movieCardList__card"><MovieCard /></li>
              <li className="movieCardList__card"><MovieCard /></li>
              <li className="movieCardList__card"><MovieCard /></li>
              <li className="movieCardList__card"><MovieCard /></li>
              <li className="movieCardList__card"><MovieCard /></li>
              <li className="movieCardList__card"><MovieCard /></li>
              <li className="movieCardList__card"><MovieCard /></li>
              <li className="movieCardList__card"><MovieCard /></li>
            </ul>
        </section>
    );
}

export default MoviesCardList;
