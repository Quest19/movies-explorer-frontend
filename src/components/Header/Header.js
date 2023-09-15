import React from "react";
import logo from "../../images/logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";

function Header() {
    const [isLoggedIn, setLoggedIn] = React.useState(true);
    const { pathname } = useLocation();
    const isMainPage = pathname === "/";
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);

    function handleOpenBurgerMenu() {
        setIsBurgerMenuOpen(true);
    }

    function handleCloseBurgerMenu() {
        setIsBurgerMenuOpen(false);
    }

    if (isLoggedIn) {
        return (
            <>
                <header
                    className={`header ${isMainPage && "header__blue-teme"}`}
                >
                    <Link to="/">
                        <img
                            className="hover header__logo"
                            src={logo}
                            alt="Логотип проекта"
                        />
                    </Link>
                    <div className="header__panel">
                        <Link
                            to="/movies"
                            className={`hover header__link ${
                                isMainPage
                                    ? "header__link_type_white"
                                    : "header__link_type_black"
                            }`}
                        >
                            Фильмы
                        </Link>
                        <Link
                            to="/saved-movies"
                            className={`hover header__link ${
                                isMainPage
                                    ? "header__link_type_white"
                                    : "header__link_type_black"
                            }`}
                        >
                            Сохраненные Фильмы
                        </Link>
                    </div>
                    <Link to="/profile" className="header__link">
                        <button className="hover header__button header__button_type_profile">
                            Аккаунт
                        </button>
                    </Link>
                    <div className="burger">
                        <button
                            className={`hover burger__button ${
                                isMainPage
                                    ? "burger__button_type_white"
                                    : "burger__button_type_black"
                            }`}
                            onClick={handleOpenBurgerMenu}
                        ></button>
                        <div className={`burger__container ${isBurgerMenuOpen ? "burger__container_type_visibility" : "burger__container_type_hidden"}`} >
                            <button className="hover burger__button burger__button_type_close" onClick={handleCloseBurgerMenu}></button>
                            <div className="burger__navigation">
                                <div className="burger__link-container">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `hover burger__link ${
                                                isActive
                                                    ? "burger__link_type_border"
                                                    : ""
                                            }`
                                        }
                                    >
                                        Главная
                                    </NavLink>
                                    <NavLink
                                        to="/movies"
                                        className={({ isActive }) =>
                                            `hover burger__link ${
                                                isActive
                                                    ? "burger__link_type_border"
                                                    : ""
                                            }`
                                        }
                                    >
                                        Фильмы
                                    </NavLink>
                                    <NavLink
                                        to="/saved-movies"
                                        className={({ isActive }) =>
                                            `hover burger__link ${
                                                isActive
                                                    ? "burger__link_type_border"
                                                    : ""
                                            }`
                                        }
                                    >
                                        Сохранённые фильмы
                                    </NavLink>
                                </div>
                                <NavLink to="profile">
                                    <button className="hover burger__profile-btn header__button_type_profile">
                                        Аккаунт
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    }

    return (
        <>
            <header className="header header__blue-teme">
                <div className="header__container">
                    <img
                        className="header__logo"
                        src={logo}
                        alt="Логотип проекта"
                    />
                    <div className="header__panel">
                        <Link to="/signup" className="header__link">
                            Регистрация
                        </Link>
                        <Link to="signin">
                            <button className="header__button">Войти</button>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
