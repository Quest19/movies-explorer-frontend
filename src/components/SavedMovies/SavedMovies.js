import SearchForm from "../Movies/SearchForm/SearchForm";
import MovieCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies() {
    return (
        <main>
            <div className="savedMovies">
                <SearchForm />
                <MovieCardList />
            </div>
        </main>
    );
}

export default SavedMovies;
