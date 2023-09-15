import ToggleButton from "../ToggleButton/ToggleButton";

function SearchForm() {
    return (
        <div className="searchForm">
                    <form className="searchForm__form">
                        <input
                            className="searchForm__input"
                            type="text"
                            placeholder="Фильм"
                        ></input>
                        <button className="hover searchForm__button"></button>
                    </form>
                <ToggleButton />
        </div>
    );
}

export default SearchForm;
