import { useNavigate } from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate();
    const handleGoBackClick = () => {
        navigate(-1);
    };

    return (
        <main>
            <div className="notFoundPage">
                <h1 className="notFoundPage__number-err">404</h1>
                <p className="notFoundPage__text">Страница не найдена</p>
                <button
                    className="hover notFoundPage__button"
                    onClick={handleGoBackClick}
                >
                    Назад
                </button>
            </div>
        </main>
    );
}

export default NotFoundPage;
