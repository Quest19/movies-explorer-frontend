import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Login() {
    return (
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
            <form className="login__form">
                <fieldset className="login__box">
                    <legend className="login__text">E-mail</legend>
                    <input
                        className="login__input"
                        type="email"
                        required
                    ></input>
                </fieldset>
                <fieldset className="login__box">
                    <legend className="login__text">Пароль</legend>
                    <input
                        className="login__input"
                        type="password"
                        minLength={8}
                        required
                    ></input>
                </fieldset>
                <button className="hover login__button">Войти</button>
            </form>
            <p className="login__question">
                Ещё не Зарегистрированы?{" "}
                <Link to="/signup" className="hover login__link">
                    Регистрация
                </Link>
            </p>
        </div>
    );
}

export default Login;
