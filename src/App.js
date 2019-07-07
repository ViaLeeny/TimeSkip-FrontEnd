//THESE ARE THE IMPORTS AYLEEN ADDED
import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage'
import SignInForm from './Pages/SignInForm'
import SignUpForm from './Pages/SignUpForm'
import TopicsPage from './Pages/TopicsPage'
import TimelineContainer from './components/Timeline/TimelineContainer'
import { Route, Switch, withRouter } from 'react-router-dom'
import EventsPage from './components/EventsPage';


const topicsURL = "http://localhost:3001/topics"

class App extends React.Component {

  //STATE FOR USER WHO IS LOGGED IN
  state = {
      name: "",
      topics: [], 
      events: []
  } 

	componentDidMount() {
		fetch(topicsURL)
		.then((resp) => resp.json())
		.then((data) => this.setState({topics: data}))
	}

  //SIGN IN FUNCTION
  signIn = name => {
      this.setState({name})
 
  }

  //SIGN OUT FUNCTION
  signOut = () => {
      this.setState({name: ""})
  }

  //SIGN UP FUNCTION
    signUp = name => {
      this.setState({name})
      this.props.history.push('./topics')
  }

  //RENDER THE USER WELCOME SCREEN
  render (){
    const { name, topics } = this.state
    const { signIn, signOut, signUp } = this

  //ROUTES FOR EACH LINK WITHIN THE APPLICATION
    return(
      <div className="App">
       <Switch>
        <Route exact path="/" component={props => <HomePage {...props} />}/>
        <Route path="/signin" component={props => <SignInForm signIn={signIn} {...props} />}/>
        <Route path="/signup" component={props => <SignUpForm signIn={signIn} {...props} />}/>
        <Route path="/topics" component={props => <TopicsPage signOut={signOut} topics={topics}name= {name} {...props} />}/>
        <Route path="/Space-Timeline" component={props => <EventsPage name= {name} {...props} />}/>
       </Switch>
      </div>


  // EVENTCONTAINER AND CONTRIBUTIONS COMPONENTS HAVE BEEN ADDED TO TOPIC PAGE
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
