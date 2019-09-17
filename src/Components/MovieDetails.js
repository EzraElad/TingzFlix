import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MovieDetails extends Component {

    starPrint = (num) => {
        let floored = Math.floor(num)
        let stars = []
        for (let i = 0; i < floored; i++) {
            stars.push(<i class="fas fa-star" style={{ color: "#E4BB24" }}></i>)
        }
        return stars
    }


    render() {
        let exactMovie = this.props.data.find(m => m.title === this.props.match.params.MovieName)
        return (
            <div style={{ marginLeft: "20%" }}>
                <Link className="back-link" to=""><i class="fas fa-angle-double-left" style={{ fontSize: "27px" }}></i> back</Link>
                <h1>{this.props.match.params.MovieName}</h1>
                <div class="img-container" >
                    <img className="details-img img" src={`${exactMovie === undefined ? null : exactMovie.image}`} />
                    <div class="overlay"></div>
                </div>
                <p>{exactMovie === undefined ? null : exactMovie.rating + " / 10"} <i class="fas fa-star" style={{ color: "#E4BB24" }}></i></p>
                <p>{exactMovie === undefined ? null : this.starPrint(exactMovie.rating)}</p>
                <p>Release Year : {exactMovie === undefined ? null : exactMovie.releaseYear}</p>
                <p>Genre : {exactMovie === undefined ? null : exactMovie.genre.map(g => g + " ")}</p>
            </div>
        )
    }
}

export default MovieDetails;