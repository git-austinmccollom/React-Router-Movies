import React, { useState, useEffect } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Link to='/movies'>Movie List</Link>
      {/* <Link to='/movies/:id'></Link> */}

      <Route path='/movies/:id'>
        <Movie movies={movieList}/>
      </Route>
      <Route exact path='/movies'>
        <MovieList movies={movieList} />
      </Route>
      <Route exact path='/'>
        <Redirect to='/' />
      </Route>
      
    </div>
  );
};

export default App;
