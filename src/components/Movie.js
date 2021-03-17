import React from "react";
import Proptypes from "prop-types";
import "./Movie.css";
import {Link} from "react-router-dom";

function Movie({id, year, title, summary, poster , genres}) {
  return (
    <div className="movie">
      <Link to={{
        pathname:`/movie/${id}`,
        state:{
          year,
          title,
          summary,
          poster,
          genres
        }
      }}>
          <img src={poster} alt={title} title={title} />
          <div className="movie__data">
            <h3 className="movie__title" style={{}}>{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <p className="movie__summary">{summary.slice(0,180)}...</p>
            <ul className="movie__genres">
                {genres.map((genre, index) => <li key={index} className="genre">{genre}</li>)}
            </ul>
          </div>
      </Link>
    </div>
  );
}

Movie.proTypes = {
  id: Proptypes.number.isRequired,
  year: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired,
  poster: Proptypes.string.isRequired,
  genres: Proptypes.arrayOf(Proptypes.string).isRequired
};

export default Movie;
