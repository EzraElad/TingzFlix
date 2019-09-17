import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';
import axios from "axios";

class App extends Component {

  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount = async () => {
    let moviesArr = await axios.get("https://cors-anywhere.herokuapp.com/https://api.androidhive.info/json/movies.json")
    let sortedArr = moviesArr.data.sort(function (a, b) { return b.releaseYear - a.releaseYear })
    this.setState({ movies: sortedArr })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1 className="tingz-header tc">TingzFlix</h1>
          <div className='tc'>
            <Route exact path="/" render={() => <MovieList key='list' data={this.state.movies} />} />
            <Route path="/:MovieName" exact render={({ match }) => <MovieDetails match={match} data={this.state.movies} />} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;