import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import Regiter from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import MainApi from "../../utils/MainApi";

function App() {
    const [currenUser, setCurrentUser] = useState({});
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [savedMovies, setSavedMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    //Функция для регистрации пользователя
    function handleRegister({ name, email, password }) {
        setIsLoading(true);
        MainApi.register(name, email, password)
            .then((data) => {
                if (data._id) {
                    handleLogin({ email, password });
                }
            })
            .catch((err) => {
                console.log(err);
                setErrorMessage(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    //Проверка токена и авторизация пользователя
    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (token) {
            MainApi.getUserInfo()
                .then((data) => {
                    if (data) {
                        setCurrentUser(data);
                        setLoggedIn(true);
                    }
                })
                .catch((err) => console.log(err));
        }
    }, []);

    //Функция для авторизации пользователя
    function handleLogin({ email, password }) {
        setIsLoading(true);
        MainApi.login(email, password)
            .then((jwt) => {
                if (jwt.token) {
                    localStorage.setItem("jwt", jwt.token);
                    setLoggedIn(true);
                    navigate("/movies", { replace: true });
                }
            })
            .catch((err) => {
                console.log(err);
                setErrorMessage(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    useEffect(() => {
        if (isLoggedIn) {
            Promise.all([MainApi.getUserInfo(), MainApi.getSavedMovies()])
                .then(([data, cardData]) => {
                    setCurrentUser(data);
                    setSavedMovies(cardData);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [isLoggedIn]);

    //Функция для редактирования профиля
    function handleProfile({ name, email }) {
        setIsLoading(true);
        MainApi.updateUser(name, email)
            .then((newUserData) => {
                setCurrentUser(newUserData);
            })
            .catch((err) => {
                console.log(err);
                setErrorMessage(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    //Выход с аккаунта
    function signOut() {
        setLoggedIn(false);
        setCurrentUser({});
        localStorage.clear();
        navigate("/");
    }

    //Функция для постановки лайка
    function handleCardLike(card) {
        MainApi.addNewMovie(card)
            .then((newMovie) => {
                setSavedMovies([newMovie, ...savedMovies]);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    //Функция для удаления лайка
    function handleCardDelete(card) {
        MainApi.deleteMovie(card._id)
            .then(() => {
                setSavedMovies((state) =>
                    state.filter((item) => item._id !== card._id)
                );
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <CurrentUserContext.Provider value={currenUser}>
            <div className="page">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header isLoggedIn={isLoggedIn} />
                                <Main />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/movies"
                        element={
                            <>
                                <Header isLoggedIn={isLoggedIn} />
                                <ProtectedRoute
                                    isLoggedIn={isLoggedIn}
                                    element={Movies}
                                    savedMovies={savedMovies}
                                    onCardDelete={handleCardDelete}
                                    onCardLike={handleCardLike}
                                />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/saved-movies"
                        element={
                            <>
                                <Header isLoggedIn={isLoggedIn} />
                                <ProtectedRoute
                                    element={SavedMovies}
                                    isLoggedIn={isLoggedIn}
                                    savedMovies={savedMovies}
                                    onCardDelete={handleCardDelete}
                                />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <>
                                <Header isLoggedIn={isLoggedIn} />
                                <ProtectedRoute
                                    element={Profile}
                                    isLoggedIn={isLoggedIn}
                                    isLoading={isLoading}
                                    signOut={signOut}
                                    handleProfile={handleProfile}
                                    errorMessage={errorMessage}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <Regiter
                                isLoggedIn={isLoggedIn}
                                isLoading={isLoading}
                                handleRegister={handleRegister}
                                errorMessage={errorMessage}
                            />
                        }
                    />
                    <Route
                        path="/signin"
                        element={
                            <Login
                                isLoggedIn={isLoggedIn}
                                isLoading={isLoading}
                                handleLogin={handleLogin}
                                errorMessage={errorMessage}
                            />
                        }
                    />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
