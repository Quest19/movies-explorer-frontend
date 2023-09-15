function AboutProject() {
  return <div className="project" id="project">
    <div className="project__header">
      <h2 className="project__title">О проекте</h2>
    </div>
    <div className="project__container">
      <p className="project__text">Дипломный проект включал 5 этапов</p>
      <p className="project__text">На выполнение диплома ушло 5 недель</p>
      <p className="project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      <p className="project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься</p>
    </div>
    <div className="project__time-container">
      <p className="project__text-time">1 неделя</p>
      <p className="project__text-time">4 недели</p>
      <p className="project__text-time">Back-end</p>
      <p className="project__text-time">Front-end</p>
    </div>
  </div>
}

export default AboutProject;