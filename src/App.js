import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Poster from './Poster';

class App extends Component {

    constructor(props){
        // App is a subclass. A subclass of Component
        // therefore, we MUST include SUPER
        super(props);
        this.state = {
            movies: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // componentWillMount is a special method that react cares. I run ONE time before the first render
    componentWillMount(){
        console.log("The component is about to be mounted");
    }

    // componentDidMount is a special method that react cares. I run ONE time after the first render
    componentDidMount(){
        console.log("The component mounted");
        var url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5'
        $.getJSON(url,(movieData)=>{
            console.log(movieData);
            this.setState({
                movies:movieData.results
            })
        });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("Form submitted");
        var value = document.getElementById('searchTerm').value;
        var url = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query='+value;
        $.getJSON(url,(movieSearchData)=>{
            // We have the new movies. Update State.
            this.setState({
                movies: movieSearchData.results
            })
        })
    }

    render() {
        var postersArray = [];
        // first time through (when the component mounts), this.state.movies will be an empty array
        this.state.movies.map((movie,index)=>{
            postersArray.push(<Poster key={index} poster={movie.poster_path} name={movie.original_title} homepage={movie.id}/>)
            // postersArray.push(<Poster key={index} movie={movie} />)
        })
        console.log(postersArray);
        return (
            <div className="App">
                <h1>This is the movie app... again</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="searchTerm" placeholder="Movie Title" />
                    <button type="submit" className="btn btn-primary">SEARCH</button>
                </form>
                {postersArray}
            </div>
        );
    }
}

export default App;
