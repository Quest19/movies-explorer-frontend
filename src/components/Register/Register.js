import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Register() {
    return (
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
            <form className="register__form">
                <fieldset className="register__box">
                    <legend className="register__text">Имя</legend>
                    <input
                        className="register__input"
                        type="text"
                        minLength={2}
                        maxLength={30}
                        required
                    ></input>
                </fieldset>
                <fieldset className="register__box">
                    <legend className="register__text">E-mail</legend>
                    <input
                        className="register__input"
                        type="email"
                        required
                    ></input>
                </fieldset>
                <fieldset className="register__box">
                    <legend className="register__text">Пароль</legend>
                    <input
                        className="register__input"
                        type="password"
                        minLength={8}
                        required
                    ></input>
                </fieldset>
                <button className="hover register__button">Зарегистрироваться</button>
            </form>
            <p className="register__question">
                Уже зарегистрированы?{" "}
                <Link to="/signin" className="hover register__link">
                    Войти
                </Link>
            </p>
        </div>
    );
}

export default Register;