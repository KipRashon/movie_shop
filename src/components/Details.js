import React, { Component } from 'react'
import  {Consumer} from '../Context';

export class Details extends Component {

    
    render() {
        return (
            <Consumer>
            {(value)=>{
                if(value.selectedMovie ==null)
                {
                    return (
                        <h3 className="jumbotron">You did not select any Movie</h3>
                    )
                }
                else{

                
                const {popularity,vote_count,poster_path,backdrop_path,
                    original_title,title,vote_average,overview,release_date
                } = value.selectedMovie;
                return (
            <React.Fragment>
                  <section className="section">
        <div className="container"  
       
        >

          <div className="row">

            <div className="col-md-6 ml-auto order-md-last mb-7 mb-md-0">
              <a className="product-media" href="#">
                <button className=" btn-circle float-right "> <span>{vote_average}</span> </button>
                <img src={"https://image.tmdb.org/t/p/original/"+poster_path} alt="product"/>
              </a>
              </div>

            <div className="col-11 mx-auto col-md-6 mx-md-0"  
            style={{  
            backgroundImage: "url(" + "https://image.tmdb.org/t/p/original/"+backdrop_path + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            color:'white',
            fontSize:'18px'
          }}>
              <h2>{title}</h2>
                <p className="text-lead my-6">{overview}</p>

              <ul className="list-unstyled">
        <li><span className="mr-1 ti-check text-success small-3"></span> Popularity - {popularity}</li>
                <li><span className="mr-1 ti-check text-success small-3"></span> Votes - {vote_count}</li>
                <li><span className="mr-1 ti-check text-success small-3"></span> Original Title {original_title}</li>
                <li><span className="mr-1 ti-check text-success small-3"></span> Release Date {release_date}</li>
              </ul>

              <div className="row gap-y align-items-center text-center bg-light rounded p-5 mt-7">
                <div className="col-md-auto ml-auto order-md-last">
                 
                </div>

                <div className="col-md-auto">
                  
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

            </React.Fragment>
                 )
                }
            }}
            </Consumer>
        )
    }
}

export default Details
