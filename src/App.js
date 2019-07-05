import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage'
import SignInForm from './Pages/SignInForm'
import SignUpForm from './Pages/SignUpForm'
import { Route } from 'react-router-dom'


class App extends React.Component {


  render (){
    return(
      <div className="App">
       <Route exact path="/" component={props => <HomePage {...props} />}/>
       <Route path="/signin" component={props => <SignInForm {...props} />}/>
       <Route path="/signup" component={props => <SignUpForm {...props} />}/>

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
