export default function getTimeMovieFilter(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return `${hours > 0 ? hours + "ч" : ""} ${
        minutes < 10 ? "0" + minutes : minutes
    }м`;
}
