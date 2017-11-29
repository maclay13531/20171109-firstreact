// The very first thing in most components, is to import react
import React, { Component } from 'react';


// I am a presentational component.
// I could have been in app.js, but it's cleaner if I'm over here

class Poster extends Component{
	render(){
		var imagePath = `http://image.tmdb.org/t/p/w300${this.props.poster}`;
		var nameToDisplay = `${this.props.name}`;
		var movieHomePage = `https://www.themoviedb.org/movie/${this.props.homepage}`;
		return(
			<div className="col-sm-3">
				<a href={movieHomePage} target="_blank"><img src={imagePath} /></a>
				<p>{nameToDisplay}</p>
			</div>		
		)
	}
}

export default Poster;
