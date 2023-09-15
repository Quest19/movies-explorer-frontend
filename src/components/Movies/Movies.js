import SearchForm from "./SearchForm/SearchForm"
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoreMovies from "./MoreMovies/MoreMovies";

function Movies() {
  return <>
    <SearchForm />
    <MoviesCardList />
    <MoreMovies />
  </>
}

export default Movies;