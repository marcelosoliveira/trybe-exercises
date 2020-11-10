import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

MovieList.defaultProps = {
  movies: [{
    title: 'Kingsglaive',
    subtitle: 'Final Fantasy XV',
    storyline: "King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",
    rating: 4.5,
    imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
  }],
};

export default MovieList;
