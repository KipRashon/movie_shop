import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/page.min.css';
import './assets/css/style.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Details from './components/Details';
import Default from './components/Default';
function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
      <Route exact path="/" component={MovieList}/>
      <Route path="/details" component={Details}/>
      <Route  component={Default}/>
      </Switch>
      
    
    </React.Fragment>
  );
}

export default App;
