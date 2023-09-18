function Techs() {
    return (
        <section className="techs" id="techs">
            <div className="techs__header">
                <h2 className="techs__title">Технологии</h2>
            </div>
            <h3 className="techs__text">7 технологий</h3>
            <p className="techs__mini-text">
                На курсе веб-разработки мы освоили технологии, которые применили
                в дипломном проекте.
            </p>
              <ul className="techs__container">
                <li className="techs__technology-text">HTML</li>
                <li className="techs__technology-text">CSS</li>
                <li className="techs__technology-text">JS</li>
                <li className="techs__technology-text">React</li>
                <li className="techs__technology-text">Git</li>
                <li className="techs__technology-text">Express.js</li>
                <li className="techs__technology-text">mongoDB</li>
              </ul>
        </section>
    );
}

export default Techs;
