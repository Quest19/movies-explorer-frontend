import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoreMovies from "./MoreMovies/MoreMovies";

function Movies() {
    return (
        <main>
            <SearchForm />
            <MoviesCardList />
            <MoreMovies />
        </main>
    );
}

export default Movies;
