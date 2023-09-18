import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <main>
            <div className="notFoundPage">
                <h1 className="notFoundPage__number-err">404</h1>
                <p className="notFoundPage__text">Страница не найдена</p>
                <Link to="/" className="hover notFoundPage__link">
                    Назад
                </Link>
            </div>
        </main>
    );
}

export default NotFoundPage;
