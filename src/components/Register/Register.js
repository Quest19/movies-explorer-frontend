import React, { useEffect, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useFormValidator } from "../../hooks/useFormValidator";

function Register({
    isLoggedIn,
    isLoading,
    handleRegister,
    errorMessage,
    resetError,
}) {
    const { formValue, errors, handleChange, isFormValid, resetForm } =
        useFormValidator();
    const resetErrorRef = useRef(resetError);

    useEffect(() => {
        const clearError = () => {
            resetErrorRef.current();
        };
        clearError();
        return clearError;
    }, []);

    function handleSubmit(evt) {
        evt.preventDefault();

        handleRegister(formValue);
    }

    useEffect(() => {
        resetForm();
    }, [resetForm]);

    if (isLoggedIn) {
        return <Navigate to="/" replace />;
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
                            disabled={isLoading}
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
                            disabled={isLoading}
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
                            disabled={isLoading}
                            required
                        ></input>
                        <span className="register__input-err">
                            {errors.password || ""}
                        </span>
                    </fieldset>
                    {!!errorMessage && (
                        <span className="register__button-err">
                            {errorMessage}
                        </span>
                    )}
                    <button
                        className={`hover register__button ${
                            !isFormValid || errors.email
                                ? "register__button_type_disabled"
                                : "register__button_type_active"
                        }`}
                        type="submit"
                        disabled={!isFormValid || isLoading || errors.email}
                    >
                        {isLoading ? "Загрузка..." : "Зарегистрироваться"}
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
