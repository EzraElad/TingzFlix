import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {

    render() {
        let movieArr = this.props.data.map(m => <Movie data={m} />)
        return (
            <div>
                {movieArr}
            </div>
        )
    }
}

export default MovieList;