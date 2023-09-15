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
        <div className="profile">
            <h2 className="profile__greetings">Привет, Ренат!</h2>
            <form className="profile__form">
                <fieldset className="profile__box">
                    <span className="profile__text">Имя</span>
                    <input
                        className="profile__input"
                        type="text"
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
                        >
                            Редактировать
                        </button>
                        <Link to="/">
                            <button className="hover profile__btn profile__btn_type_exit">
                                Выйти из аккаунта
                            </button>
                        </Link>
                    </>
                ) : (
                    <button
                        className="hover profile__btn profile__btn_type_save"
                        onClick={handleSave}
                    >
                        Сохранить
                    </button>
                )}
            </div>
        </div>
    );
}

export default Profile;
