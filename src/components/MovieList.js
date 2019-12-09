import React, { Component } from 'react';
import  {Consumer} from '../Context';

export class MovieList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section">
        <div className="container">
          <div className="row gap-y">
            <Consumer>
                                {(value)=>{
                                   return (value.movies)
                                }}
                    </Consumer>

          </div>

        </div>
      </section>
            </React.Fragment>
        )
    }
}

export default MovieList
