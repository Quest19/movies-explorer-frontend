import React, { useState, useContext, useEffect } from "react";
import { useFormValidator } from "../../hooks/useFormValidator";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function Profile({ isLoading, signOut, handleProfile, errorMessage }) {
    const [isCorrect, setIsCorrect] = useState(false);
    const [isSameUser, setIsSameUser] = useState(true);
    const [isSaved, setIsSaved] = useState(false);
    const { formValue, errors, handleChange, isFormValid, resetForm } =
        useFormValidator();
    const currentUser = useContext(CurrentUserContext);

    function handleSubmit(evt) {
        evt.preventDefault();
        handleProfile(formValue);
        setIsCorrect(false);
        setIsSaved(true);
    }

    useEffect(() => {
        if (currentUser) {
            resetForm(currentUser, {}, true);
        }
    }, [currentUser, resetForm]);

    useEffect(() => {
        setIsSameUser(
            currentUser.name === formValue.name &&
                currentUser.email === formValue.email
        );
    }, [formValue, currentUser]);

    const handleEdit = () => {
        setIsCorrect(true);
    };

    return (
        <main>
            <section className="profile">
                <h2 className="profile__greetings">{`Привет, ${
                    currentUser.name || ""
                }!`}</h2>
                <form
                    className="profile__form"
                    id="form"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <fieldset className="profile__box">
                        <span className="profile__text">Имя</span>
                        <input
                            className={`profile__input ${
                                errors.name && "profile__input_type_error"
                            }`}
                            type="text"
                            id="name"
                            name="name"
                            minLength={2}
                            maxLength={30}
                            value={formValue.name || ""}
                            onChange={handleChange}
                            disabled={!isCorrect || isLoading}
                            required
                        ></input>
                    </fieldset>
                    <fieldset className="profile__box">
                        <span className="profile__text">E-mail</span>
                        <input
                            className={`profile__input ${
                                errors.email && "profile__input_type_error"
                            }`}
                            type="email"
                            id="email"
                            name="email"
                            value={formValue.email || ""}
                            onChange={handleChange}
                            disabled={!isCorrect || isLoading}
                            required
                        ></input>
                    </fieldset>
                </form>
                <div className="profile__container">
                    {!isCorrect ? (
                        <>
                            {isSaved && !errorMessage && (
                                <span className="profile__message">
                                    Данные успешно сохранены
                                </span>
                            )}
                            {errorMessage && (
                                <span className="profile__message profile__message_type_err">
                                    При обновлени данных произошла ошибка!
                                </span>
                            )}
                            <button
                                className="hover profile__btn profile__btn_type_edit"
                                onClick={handleEdit}
                                type="button"
                            >
                                Редактировать
                            </button>
                            <button
                                className="hover profile__btn profile__btn_type_exit"
                                onClick={signOut}
                            >
                                Выйти из аккаунта
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className={`hover profile__btn profile__btn_type_save ${
                                    isLoading || !isFormValid || isSameUser
                                        ? "profile__btn_type_disabled"
                                        : "profile__btn_type_active"
                                }`}
                                onClick={handleSubmit}
                                disabled={
                                    isLoading || !isFormValid || isSameUser
                                }
                                type="submit"
                            >
                                {isLoading ? "Сохранение..." : "Сохранить"}
                            </button>
                        </>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Profile;
