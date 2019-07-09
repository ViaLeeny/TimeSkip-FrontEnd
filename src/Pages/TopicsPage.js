import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Button, Card, Divider, Image, Placeholder, Form, Icon } from 'semantic-ui-react'
import { signin } from "../Services/api"
import ContributionContainer from '../ContributionContainer.js'
import EventsPage from '../components/EventsPage'
import TopicCard from './TopicCard'





class TopicsPage extends React.Component {

//     componentDidMount(){ 

//     if (!this.props.name){
//         this.props.history.push('./signin')

//     }

// }
    render(){
    return (
    <div className="App">

{/* MERGE CONFLICT
    
    <<<<<<< HEAD
        <header className="App-header topicPage">
        <img src={logo} className="App-logo" alt="logo" />
            {
                this.props.name.length > 0 
                ? <div> 
                    <h1>Which topic would you like to choose from {this.props.name}?</h1>
                    <Link to='/' onClick={this.props.signout} class="ui primary button" >Sign Out </Link>
======= */}
       
        <header className="App-header topicPage">
        <img src={logo} className="App-logo" alt="logo" />
                <div> 
                    <h1>Choose a topic, {this.props.name}</h1>
                    <div className="ui two column grid">
				    <div className="row bot-army-row">
                        {this.props.topics.map((topic, index) => <TopicCard key={topic.id} name={topic.name} description={topic.description}/>)}
                    </div>
                    </div>    
{/* MERGE CONFLICT
    
    <<<<<<< HEAD
                  </div>
                : 
                <div>
                    <h1>Invalid user name/password combination</h1>
                    <Link to='/signin' class="ui primary button"  >Sign In </Link>
                    <Link to='/signup' class="ui secondary button"  >Sign Up </Link>
======= */}
                </div>
          </header>  
    </div>
    );}
}

export default TopicsPage;