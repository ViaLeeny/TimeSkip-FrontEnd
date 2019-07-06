import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Link } from 'react-router-dom'
import { Button, Card, Divider, Image, Placeholder, Form, Icon } from 'semantic-ui-react'
import { signin } from "../Services/api"
import ContributionContainer from '../ContributionContainer.js'
import EventsPage from '../components/EventsPage'


class Topics extends React.Component {

    render(){
    return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            {
                this.props.name.length > 0 
                ? <h1>`Which topic would you like to choose from ${this.props.name}?`</h1>
                : <Link to='/' class="ui primary button"  >Please Sign In </Link>
            } 
   
            {
                this.props.name.length > 0
            //     ? <Button onClick={this.props.signout} variant="contained" color="primary">
            //     SIGN OUT
            //   </Button>
                ? <Link to='/' onClick={this.props.signout} class="ui primary button" >Sign Out </Link>
                : null
            }
            
            {
                this.props.name.length > 0 
                ?         
                <div class="topic-container">
                <Link to='/TimeLine'  >
        
                <Card>
                    <Image src='https://www.history.org.uk/library/1308/0000/0082/moon_landing_640.jpg' wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>Space</Card.Header>
                    <Card.Description>
                        A brief history of space exploration.
                    </Card.Description>
                    </Card.Content>
                </Card>
                </Link>
        
                <Card>
                    <Image src='https://www.history.org.uk/library/1308/0000/0082/moon_landing_640.jpg' wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                        Matthew is a musician living in Nashville.
                    </Card.Description>
                    </Card.Content>
                </Card>
                </div>
                : null 
            }
        </header>
      {/* <EventsPage />
      <ContributionContainer /> */}
    </div>
    );}
}

export default Topics;