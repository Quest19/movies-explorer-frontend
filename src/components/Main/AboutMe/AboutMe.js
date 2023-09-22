import myImage from "../../../images/me.jpg";

function AboutMe() {
    return (
        <section className="about" id="about">
            <div className="about__header">
                <h2 className="about__title">Студент</h2>
            </div>
            <div className="about__container">
                <div className="about__text-content">
                    <h2 className="about__name">Ренат</h2>
                    <h3 className="about__profession">
                        Фронтенд-разработчик, 22 года
                    </h3>
                    <p className="about__description">
                        Родился в Нефтекамске. В 18 лет поступил в МТУСИ в
                        Москве. Получил диплом бакалавра и переехал в Петербург,
                        где продолжил учиться в магистратуре института ЛЭТИ.
                        Люблю слушать музыку, играть в баскетбол и заниматься
                        графическим рисованием.
                    </p>
                    <a
                        href="https://github.com/Quest19"
                        className="hover about__link"
                        target="blank"
                    >
                        Github
                    </a>
                </div>
                <div className="about__photo-container">
                    <img
                        className="about__photo"
                        src={myImage}
                        alt="Фотография, на который запечетлен автор, гуляющий по парку."
                    ></img>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
