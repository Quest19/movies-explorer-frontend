class mainApi {
    constructor({ url }) {
        this._url = url;
    }

    _getJSON(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }

    register(name, email, password) {
        return fetch(`${this._url}/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        }).then(this._getJSON);
    }

    login(email, password) {
        return fetch(`${this._url}/signin`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        }).then(this._getJSON);
    }

    getUserInfo() {
        const token = localStorage.getItem("jwt");
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        }).then(this._getJSON);
    }

    updateUser(name, email) {
        const token = localStorage.getItem("jwt");
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email }),
        }).then(this._getJSON);
    }

    getSavedMovies() {
        const token = localStorage.getItem("jwt");
        return fetch(`${this._url}/movies`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        }).then(this._getJSON);
    }

    addNewMovie(data) {
        const token = localStorage.getItem("jwt");
        return fetch(`${this._url}/movies`, {
            method: "POST",
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: 'https://api.nomoreparties.co' + data.image.url,
                trailerLink: data.trailerLink,
                thumbnail: 'https://api.nomoreparties.co' + data.image.formats.thumbnail.url,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            }),
        }).then(this._getJSON);
    }

    deleteMovie(data) {
        const token = localStorage.getItem("jwt");
        return fetch(`${this._url}/movies/${data}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${token}`,
            },
        }).then(this._getJSON);
    }
}

const MainApi = new mainApi({
    // url: "http://localhost:3000",
    url: "https://api.quest19-diplom.nomoredomainsicu.ru",
});

export default MainApi;
