import React from "react";
import { Link } from "react-router-dom";

function Profile() {
    const [name, setName] = React.useState("Ренат");
    const [email, setEmail] = React.useState("huzin-2014@mail.ru");
    const [isEdit, setIsEdit] = React.useState(false);

    const handleEdit = () => {
        setIsEdit(true);
    };

    const handleSave = () => {
        setIsEdit(false);
    };

    return (
        <main>
            <section className="profile">
                <h2 className="profile__greetings">Привет, Ренат!</h2>
                <form className="profile__form">
                    <fieldset className="profile__box">
                        <span className="profile__text">Имя</span>
                        <input
                            className="profile__input"
                            type="text"
                            placeholder="Имя"
                            id="name"
                            name="name"
                            value={name}
                            minLength={2}
                            maxLength={30}
                            disabled={!isEdit}
                            onChange={(evt) => setName(evt.target.value)}
                        ></input>
                    </fieldset>
                    <fieldset className="profile__box">
                        <span className="profile__text">E-mail</span>
                        <input
                            className="profile__input"
                            type="email"
                            placeholder="E-mail"
                            id="email"
                            name="email"
                            value={email}
                            disabled={!isEdit}
                            onChange={(evt) => setEmail(evt.target.value)}
                        ></input>
                    </fieldset>
                </form>
                <div className="profile__container">
                    {!isEdit ? (
                        <>
                            <button
                                className="hover profile__btn profile__btn_type_edit"
                                onClick={handleEdit}
                                type="button"
                            >
                                Редактировать
                            </button>
                            <Link
                                to="/"
                                className="hover profile__btn profile__btn_type_exit"
                            >
                                Выйти из аккаунта
                            </Link>
                        </>
                    ) : (
                        <button
                            className="hover profile__btn profile__btn_type_save"
                            onClick={handleSave}
                            type="submit"
                        >
                            Сохранить
                        </button>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Profile;
