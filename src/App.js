import React, { Component } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import MovieForm from './components/MovieForm'

class App extends Component {

  state = {
    movies: [
      {name: 'The Matrix', image: 'https://images-na.ssl-images-amazon.com/images/I/71zP%2Bv1ZzPL._AC_SY606_.jpg'},
      {name: 'Air Bud', image: 'https://images-na.ssl-images-amazon.com/images/I/51ixe7szMsL._AC_.jpg'},
      {name: 'Blade', image: 'https://cdn.shopify.com/s/files/1/1416/8662/products/blade_1988_original_film_art_5000x.jpg?v=1575399812'},
    ]
  }

  showMovies = () => this.state.movies.map(movie => {
    return <MovieCard key={movie.name} name={movie.name} image={movie.image} /> 
  })

  addMovie = (movie) => {
    this.setState({
      movies: [...this.state.movies, movie]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Movie App</h1>
        <MovieForm addMovie={this.addMovie} /> 
        <ul>
          {this.showMovies()}
        </ul>
      </div>
    );
  }
}

export default App;
