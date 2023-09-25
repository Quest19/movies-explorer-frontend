function MoreMovies({ onLoadMore }) {
    return (
        <div className="moreMovies">
            <button
                className="hover moreMovies__button"
                type="button"
                onClick={onLoadMore}
            >
                Ещё
            </button>
        </div>
    );
}

export default MoreMovies;
