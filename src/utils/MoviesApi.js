export const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

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
    url: "https://api.nomoreparties.co/beatfilm-movies",
});

export default MoviesApi;
