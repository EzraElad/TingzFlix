import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Movie extends Component {

    render() {
        let data = this.props.data
        return (
            <Link to={`/${data.title}`}>
                <div className="movie-box dib br3 pa5 ma2 grow bw2 shadow-5">
                    <img className="home-img" src={data.image} />
                    <p className="movie-title">{data.title}</p>
                </div>
            </Link>
        )
    }
}

export default Movie;