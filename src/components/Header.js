import React, { Component } from 'react';
import Background from '../assets/img/bg1.jpg';

export class Header extends Component {
    render() {
        return (
            <React.Fragment>
                 <header className="header text-white" style={ {backgroundImage:`url(${Background})`} } data-overlay="6">
        <div className="container text-center">

          <div className="row">
            <div className="col-md-8 mx-auto">

              <h1>Welcome To Our Movie Hub</h1>
          
              <p className="lead-2 opacity-90 mt-6"><input type="search" placeholder="Search for a movie, tv, show, person ..."   id="search" className="form-control bg-transparent text-white"/></p>

            </div>
          </div>

        </div>
      </header>


            </React.Fragment>
        )
    }
}

export default Header
