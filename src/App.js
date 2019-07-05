import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage'
import { Route } from 'react-router-dom'


class App extends React.Component {

  

  render (){
    return(
      <div className="App">
       <HomePage />
      </div>
    )
  }
}

export default App;

/* DEFAULT JS FROM CREATE REACT APP*/
/* <img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>  */
