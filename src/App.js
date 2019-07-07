import React, { Component } from "react";
import ContributionContainer from './ContributionContainer.js'
import './App.css';
import { Container, Header, List } from "semantic-ui-react";
const CONTRIBUTIONS_URL = `http://localhost:3000/contributions/`;

// import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contributions: []
    };
  }

  componentDidMount() {
    fetch(CONTRIBUTIONS_URL)
      .then(resp => resp.json())
      .then(contributions => {
        console.log(contributions)
        this.setState({ contributions: contributions });
      });
  }

render(){
  return (
    // Ross Test
    <div className="App">
      <header className="App-header">

      </header>
      <p>TimeSkip</p>
       <ContributionContainer contributions={this.state.contributions} />

     
    </div>
  );
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
</a> */
