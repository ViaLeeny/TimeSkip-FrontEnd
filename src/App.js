import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
       <h1>TimeSkip</h1>
       <div>
        <button class="ui primary button">Sign In</button>
        <button class="ui secondary button">Sign Up</button>
      </div>
{/* 
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/Signin' component={HomePage}/>
        <Route path='/Topics' component={HomePage}/>
        <Route component={() => <h1>Page Not Found</h1>}/>
      </Switch> */}

      </header>
    </div>
  );
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
