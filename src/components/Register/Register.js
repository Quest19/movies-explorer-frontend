import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useFormValidator } from "../../hooks/useFormValidator";

function Register({ isLoggedIn, handleRegister, errorMessage }) {
    const { formValue, errors, handleChange, isFormValid, resetForm } =
        useFormValidator();

    function handleSubmit(evt) {
        evt.preventDefault();
        handleRegister(formValue);
    }

    useEffect(() => {
        resetForm();
    }, [resetForm]);

    if (isLoggedIn) {
      return <Navigate to="/" replace />
    }

    return (
        <main>
            <div className="register">
                <div className="register__header">
                    <Link to="/" className="hover register__link">
                        <img
                            className="register__logo"
                            src={logo}
                            alt="Логотип проекта"
                        />
                    </Link>
                    <h2 className="register__title">Добро пожаловать!</h2>
                </div>
                <form
                    className="register__form"
                    id="form"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <fieldset className="register__box">
                        <legend className="register__text">Имя</legend>
                        <input
                            className="register__input"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Введите ваше имя"
                            minLength={2}
                            maxLength={30}
                            onChange={handleChange}
                            value={formValue.name || ""}
                            required
                        ></input>
                        <span className="register__input-err">
                            {errors.name || ""}
                        </span>
                    </fieldset>
                    <fieldset className="register__box">
                        <legend className="register__text">E-mail</legend>
                        <input
                            className="register__input"
                            placeholder="Введите E-mail"
                            id="email"
                            name="email"
                            type="email"
                            onChange={handleChange}
                            value={formValue.email || ""}
                            required
                        ></input>
                        <span className="register__input-err">
                            {errors.email || ""}
                        </span>
                    </fieldset>
                    <fieldset className="register__box">
                        <legend className="register__text">Пароль</legend>
                        <input
                            className="register__input"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Введите пароль"
                            minLength="8"
                            onChange={handleChange}
                            value={formValue.password || ""}
                            required
                        ></input>
                        <span className="register__input-err">
                            {errors.password || ""}
                        </span>
                    </fieldset>
                    {errorMessage && (
                        <span className="register__button-err">
                            Что-то пошло не так
                        </span>
                    )}
                    <button
                        className={`hover register__button ${
                            isFormValid
                                ? "register__button_type_active"
                                : "register__button_type_diasbled"
                        }`}
                        type="submit"
                        disabled={!isFormValid}
                    >
                        Зарегистрироваться
                    </button>
                </form>
                <p className="register__question">
                    Уже зарегистрированы?{" "}
                    <Link to="/signin" className="hover register__link">
                        Войти
                    </Link>
                </p>
            </div>
        </main>
    );
}

export default Register;
