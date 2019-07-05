import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage'
import SignInForm from './Pages/SignInForm'
import SignUpForm from './Pages/SignUpForm'
import Topics from './Pages/Topics'
import { Route, Switch, withRouter } from 'react-router-dom'


class App extends React.Component {

  state = {
      name: ""
  }

  signIn = name => {
      this.setState({name})
 
  }

  signOut = () => {
      this.setState({name: ""})
  }




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
      </div>
    )
  }
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
