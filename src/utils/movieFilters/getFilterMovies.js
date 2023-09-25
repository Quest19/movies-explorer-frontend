export default function getFilterMovies(movies, query) {
  const userQuery = query.toLowerCase().trim();

  return movies.filter((movie) =>
    [movie.nameRU, movie.nameEN].some(
      (name) => name.toLowerCase().includes(userQuery)
    )
  );
}