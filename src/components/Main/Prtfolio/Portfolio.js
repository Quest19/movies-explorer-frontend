import arrow from "../../../images/arrow.svg";

function Portfolio() {
    return (
        <div className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfoio__container">
                <div className="portfolio__box">
                    <h2 className="hover portfolio__text">Статичный сайт</h2>
                    <img
                        src={arrow}
                        alt="Стрелка для перехода на страницу"
                        className="hover portfolio__img"
                    ></img>
                </div>
                <div className="portfolio__box">
                    <h2 className="hover portfolio__text">Адаптивный сайт</h2>
                    <img
                        src={arrow}
                        alt="Стрелка для перехода на страницу"
                        className="hover portfolio__img"
                    ></img>
                </div>
                <div className="portfolio__box">
                    <h2 className="hover portfolio__text">Одностраничное приложение</h2>
                    <img
                        src={arrow}
                        alt="Стрелка для перехода на страницу"
                        className="hover portfolio__img"
                    ></img>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
