import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Button, Card, Divider, Image, Placeholder, Form, Icon } from 'semantic-ui-react'
import { signin } from "../Services/api"
import ContributionContainer from '../ContributionContainer.js'
import EventsPage from '../components/EventsPage'
import TopicCard from './TopicCard'
import {Link } from 'react-router-dom'





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
        
        <img src='https://images.vexels.com/media/users/3/136991/isolated/preview/064fd00b13b1c206ff592032ffca1e0c-time-clock-icon-by-vexels.png' className="App-logo" alt="logo" />
                <div> 
                    <h1>Choose a topic</h1>
                    <div className="ui two column grid">
				    <div className="row bot-army-row">
                        {this.props.topics.map((topic, index) => <TopicCard key={topic.id} name={topic.name} description={topic.description}/>)}
                    </div>
                    </div> 
                    <Link to='/' onClick={this.props.signout} class="ui primary button signout" >Sign Out </Link>   
                </div>
          </header>  
    </div>
    );}
}

export default TopicsPage;