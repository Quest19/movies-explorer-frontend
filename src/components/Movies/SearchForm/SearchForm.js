import ToggleButton from "../ToggleButton/ToggleButton";

function SearchForm() {
    return (
        <section className="searchForm">
            <form className="searchForm__form">
                <div className="searchForm__container">
                    <input
                        className="searchForm__input"
                        type="text"
                        placeholder="Фильм"
                        requiredx
                    ></input>
                    <button
                        className="hover searchForm__button"
                        type="submit"
                    ></button>
                </div>
                <ToggleButton />
            </form>
        </section>
    );
}

export default SearchForm;
