//THESE ARE THE IMPORTS AYLEEN ADDED
import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage'
import SignInForm from './Pages/SignInForm'
import SignUpForm from './Pages/SignUpForm'
import Topics from './Pages/Topics'
import { Route, Switch, withRouter } from 'react-router-dom'

//THESE ARE THE IMPORTS ZUBAIR ADDED
import ContributionContainer from './ContributionContainer.js'
// import logo from './logo.svg';
import './App.css';
import EventsPage from './components/EventsPage.js'



class App extends React.Component {

//STATE FOR USER WHO IS LOGGED IN
  state = {
      name: ""
  }

//SIGN IN FUNCTION
  signIn = name => {
      this.setState({name})
 
  }

//SIGN OUT FUNCTION

  signOut = () => {
      this.setState({name: ""})
  }

//RENDER THE USER WELCOME SCREEN
  render (){
    const { name } = this.state
    const { signIn, signOut } = this

    return(
      <div className="App">
       <Switch>
        <Route exact path="/" component={props => <HomePage {...props} />}/>
        <Route path="/signin" component={props => <SignInForm signIn={signIn} {...props} />}/>
        <Route path="/signup" component={props => <SignUpForm {...props} />}/>
        <Route path="/topics" component={props => <Topics signOut={signOut} name= {name} {...props} />}/>
       </Switch>
      
      <EventsPage />
      <ContributionContainer />
      </div>
    )
  }



export default withRouter(App);

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
