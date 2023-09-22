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
                    className={`header ${isMainPage && "header_type_blue"}`}
                >
                    <Link to="/">
                        <img
                            className="hover header__logo"
                            src={logo}
                            alt="Логотип проекта"
                        />
                    </Link>
                    <nav className="header__panel">
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
                    </nav>
                    <Link
                        to="/profile"
                        className="hover header__link header__link_type_account"
                    >
                        Аккаунт
                    </Link>
                    <div className="burger">
                        <button
                            className={`hover burger__button ${
                                isMainPage
                                    ? "burger__button_type_white"
                                    : "burger__button_type_black"
                            }`}
                            onClick={handleOpenBurgerMenu}
                            type="button"
                        ></button>
                        <div
                            className={`burger__container ${
                                isBurgerMenuOpen
                                    ? "burger__container_type_visibility"
                                    : "burger__container_type_hidden"
                            }`}
                        >
                            <button
                                className="hover burger__button burger__button_type_close"
                                onClick={handleCloseBurgerMenu}
                                type="button"
                            ></button>
                            <nav className="burger__navigation">
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
                                <NavLink
                                    to="/profile"
                                    className="hover burger__link burger__link_type_account"
                                >
                                    Аккаунт
                                </NavLink>
                            </nav>
                        </div>
                    </div>
                </header>
            </>
        );
    }

    return (
        <>
            <header className="header header_type_blue">
                <div className="header__container">
                    <Link to="/">
                        <img
                            className="hover header__logo"
                            src={logo}
                            alt="Логотип проекта"
                        />
                    </Link>
                    <nav className="header__panel header__panel_type_unauthorized">
                        <Link
                            to="/signup"
                            className="hover header__link header__link_type_white"
                        >
                            Регистрация
                        </Link>
                        <Link to="signin" className="hover header__link">
                            <button
                                className="header__button header__button_type_unauthorized"
                                type="button"
                            >
                                Войти
                            </button>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
