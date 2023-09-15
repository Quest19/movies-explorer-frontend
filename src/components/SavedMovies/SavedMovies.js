import SearchForm from "../Movies/SearchForm/SearchForm";
import MovieCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies() {
    return (
        <div className="savedMovies">
            <SearchForm />
            <MovieCardList />
        </div>
    );
}

export default SavedMovies;
