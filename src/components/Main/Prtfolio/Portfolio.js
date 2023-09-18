function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__container">
                <li className="portfolio__box">
                    <a
                        href="https://quest19.github.io/how-to-learn/"
                        className="hover portfolio__text"
                        target="blank"
                    >
                        Статичный сайт
                    </a>
                    <div className="hover portfolio__img"></div>
                </li>
                <li className="portfolio__box">
                    <a
                        href="https://quest19.github.io/russian-travel/"
                        className="hover portfolio__text"
                        target="blank"
                    >
                        Адаптивный сайт
                    </a>
                    <div className="hover portfolio__img"></div>
                </li>
                <li className="portfolio__box">
                    <a
                        href="https://quest19.github.io/mesto/"
                        className="hover portfolio__text"
                        target="blank"
                    >
                        Одностраничное приложение
                    </a>
                    <div className="hover portfolio__img"></div>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;
