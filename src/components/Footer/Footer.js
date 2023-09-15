function Footer() {
    return (
        <>
            <footer className="footer">
                <h3 className="footer__title">
                    Учебный проект Яндекс.Практикум х BeatFilm.
                </h3>
                <div className="footer__container">
                    <p className="footer__data">© {new Date().getFullYear()}</p>
                    <div className="footer__links">
                        <a
                            className="hover footer__link"
                            href="https://practicum.yandex.ru/"
                        >
                            Яндекс.Практикум
                        </a>
                        <a
                            className="hover footer__link"
                            href="https://github.com/Quest19"
                        >
                            Github
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
