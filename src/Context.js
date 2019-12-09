import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



const productContext = React.createContext();
    //Provider and the consumer

class ProductProvider extends Component {

    state ={
        originalMovies:null,
        movies:null,
        selectedMovie:null,

    }

    switchToMovie = (id)=>{
        
        const {originalMovies}= this.state;
        const selected = originalMovies.find( item => item.id == id );
       
        this.setState({selectedMovie:selected});
    }
    componentDidMount(){
        fetch("https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=9ad5bd15eeb446ea9ef27a385d9fd16f",
        {
          headers: {
           
              "origin": "*",
              "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
              "preflightContinue": false,
              "optionsSuccessStatus": 204
          
          }
        }
        )
        .then(data =>{
            return data.json();
        })
        .then(res =>{
            const {results}= res;
           this.setState(()=>{
                return {originalMovies:results}
           });
           
           this.displayMovies();
        })
    }

    displayMovies = ()=>{
        const {originalMovies}= this.state;
        let names = originalMovies.map((item)=>{
            return(
               
                
                <div className="col-md-6 col-xl-4">
                <div className="product-3">
                    <div className="product-detail product-top" >
                    <button className=" btn-circle  float-right "> <span>{item.vote_average}</span> </button>
                    </div>
                    <Link to='/details'>
                  <a className="product-media" href="#">
                              <img src={"https://image.tmdb.org/t/p/original/"+item.poster_path} onClick={()=>this.switchToMovie(item.id)} alt="product"/>
                  </a>
                  </Link>
                  <div className="product-detail">
                    <h6><a href="#">{item.title}</a></h6>
                    <div className="product-price"><s>{item.release_date}</s> </div>
                    <p>{item.overview.substring(0, 50)+"...."}</p>
                  </div>
                  <Link to='/details'>
               
                  <div className="product-detail text-left"  onClick={()=>this.switchToMovie(item.id)}>
                    More Info
                  </div>
                  </Link>
                </div>
              </div>
              
            )
        });
        
        
        this.setState({movies:names});

    }

    render() {
        return (
            <productContext.Provider value ={{
                ...this.state,
            
            }}>
                
                {this.props.children}
            </productContext.Provider>
        )
    }
}
const Consumer = productContext.Consumer;


export  {ProductProvider,Consumer};