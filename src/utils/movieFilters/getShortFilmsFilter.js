import { SHORT_FILM_DURATION } from "../constants/constants";

export default function getShortFilmsFilter(movies) {
    return movies.filter((movie) => movie.duration < SHORT_FILM_DURATION);
}
