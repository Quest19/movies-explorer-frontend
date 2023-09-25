export default function getShortFilmsFilter(movies) {
    return movies.filter((movie) => movie.duration < 40);
}