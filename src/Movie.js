import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import "./Reset.css";

function Movie({year, title, summary, poster, genres}){
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            {/* title : 마우스 커서를 올려 두었을 떄 {title} 이 나타남 */}
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <p className="movie__year">{year}</p>
                <ul className="genres">{genres.map((genre, index) => 
                    <li key={index} className="genres__genre">{genre}</li>
                )}
                </ul>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    );
}
// rendering

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
    // 배열 형태 proptypes
};

export default Movie;