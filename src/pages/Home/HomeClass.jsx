import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionTypes } from '../../services/movies/actionTypes';
// import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super(props);

    this.checkForMovies = this.checkForMovies.bind(this);
  }

  checkForMovies() {
    if (
      this.props.movies.allMovies.length === 0 &&
      this.props.movies.status === 'not-started'
    ) {
      this.props.getMovies();
    }
  }

  componentDidUpdate() {
    if (
      this.props.movies.allMovies.length === 0 &&
      this.props.movies.status === 'not-started'
    ) {
      this.props.getMovies();
    }
  }

  componentWillUnmount() {
    this.props.clearMovies();
  }

  render() {
    if (
      this.props.movies.allMovies.length === 0 &&
      this.props.movies.status === 'loading'
    ) {
      return <h1>Loading...</h1>;
    }

    if (
      this.props.movies.allMovies.length === 0 &&
      this.props.movies.status === 'error'
    ) {
      return <h1>{this.props.movies.errorMessage}</h1>;
    }

    return (
      <div>
        <h1>Marvel Movie Database (component)</h1>
        <ul>
          {this.props.movies.allMovies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

Home.propTypes = {
  movies: PropTypes.object,
  getMovies: PropTypes.func,
  clearMovies: PropTypes.func,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapStateToDispatch = (dispatch) => ({
  getMovies: bindActionCreators(actionTypes.getMovies, dispatch),
  clearMovies: bindActionCreators(actionTypes.clearMovies, dispatch),
});

export default connect(mapStateToProps, mapStateToDispatch)(Home);
