import React, { useEffect } from "react";
import logo from "../../images/logo.svg";
import { Link, Navigate } from "react-router-dom";
import { useFormValidator } from "../../hooks/useFormValidator";

function Login({ isLoggedIn, handleLogin, errorMessage }) {
    const { formValue, errors, handleChange, isFormValid, resetForm } =
        useFormValidator();

    function handleSubmit(evt) {
        evt.preventDefault();
        handleLogin(formValue);
    }

    useEffect(() => {
        resetForm();
    }, [resetForm]);

    if (isLoggedIn) {
      return <Navigate to="/" replace />
    }

    return (
        <main>
            <div className="login">
                <div className="login__header">
                    <Link to="/" className="login__link">
                        <img
                            className="hover login__logo"
                            src={logo}
                            alt="Логотип проекта"
                        />
                    </Link>
                    <h2 className="login__title">Рады видеть!</h2>
                </div>
                <form
                    className="login__form"
                    id="form"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <fieldset className="login__box">
                        <legend className="login__text">E-mail</legend>
                        <input
                            className="login__input"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Введите E-mail"
                            onChange={handleChange}
                            value={formValue.email || ''}
                            required
                        ></input>
                        <span className="login__input-err">{errors.email || ''}</span>
                    </fieldset>
                    <fieldset className="login__box">
                        <legend className="login__text">Пароль</legend>
                        <input
                            className="login__input"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Введите пароль"
                            minLength={8}
                            onChange={handleChange}
                            value={formValue.password || ''}
                            required
                        ></input>
                        <span className="login__input-err">
                            {errors.password || ''}
                        </span>
                    </fieldset>
                    {errorMessage && (
                        <span className="login__button-err">
                            Неверные почта или пароль
                        </span>
                    )}
                    <button
                        className={`hover login__button ${
                            isFormValid
                                ? "login__button_type_active"
                                : "login__button_type_diasbled"
                        }`}
                        type="submit"
                        disabled={!isFormValid}
                    >
                        Войти
                    </button>
                </form>
                <p className="login__question">
                    Ещё не Зарегистрированы?{" "}
                    <Link to="/signup" className="hover login__link">
                        Регистрация
                    </Link>
                </p>
            </div>
        </main>
    );
}

export default Login;
