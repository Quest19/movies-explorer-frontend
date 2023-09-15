function Techs() {
    return (
        <div className="techs" id="techs">
            <div className="techs__header">
                <h2 className="techs__title">Технологии</h2>
            </div>
            <h1 className="techs__text">7 технологий</h1>
            <p className="techs__mini-text">
                На курсе веб-разработки мы освоили технологии, которые применили
                в дипломном проекте.
            </p>
            <div className="techs__container">
                <p className="techs__technology-text">HTML</p>
                <p className="techs__technology-text">CSS</p>
                <p className="techs__technology-text">JS</p>
                <p className="techs__technology-text">React</p>
                <p className="techs__technology-text">Git</p>
                <p className="techs__technology-text">Express.js</p>
                <p className="techs__technology-text">mongoDB</p>
            </div>
        </div>
    );
}

export default Techs;
