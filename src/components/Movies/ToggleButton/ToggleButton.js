function ToggleButton({ onToggle, isShortMovies }) {
    return (
        <div className="toggleButton">
            <input
                type="checkbox"
                id="switch"
                className="toggleButton__switch-input"
                onChange={onToggle}
                checked={isShortMovies}
            />
            <label
                htmlFor="switch"
                className="hover toggleButton__switch-label"
            ></label>
            <p className="toggleButton__text">Короткометражки</p>
        </div>
    );
}

export default ToggleButton;
