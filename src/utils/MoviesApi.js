import { MOVIE_API_URL } from "./constants/constants";

class moviesApi {
    constructor({ url }) {
        this._url = url;
    }

    _getJSON(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMovies() {
        return fetch(`${this._url}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(this._getJSON);
    }
}

const MoviesApi = new moviesApi({
    url: MOVIE_API_URL,
});

export default MoviesApi;
