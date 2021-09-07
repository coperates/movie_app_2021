import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{

  state = {
    isLoading: true,
    movies: []
  }
  //async 너는 기다려야해? 무엇을? await를
  getMovie = async () => {
    const {
      data: {
        data: {movies}
        }
      } =  await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");

    //state에 movies, isLoading을 업데이트해줌
    this.setState({movies, isLoading: false});
  };
  
  componentDidMount(){
    this.getMovie();
  }

  render(){
    const {isLoading, movies} = this.state;
    return (
    <section className="container">
      {isLoading 
      ? <div className="loding">
        <span className="loding__text">loding...</span>
        </div>
      : movies.map(movie => {
          return(
            <div key={movie.id} className="movies">
              <Movie
              id={movie.id}
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image} 
              genres={movie.genres}
            />
            </div>
            );
          })
      }
    </section>
    );
  }
}
export default App;

