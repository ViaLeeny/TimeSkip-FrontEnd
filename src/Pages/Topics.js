import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Link } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import { signin } from "../Services/api"


class Topics extends React.Component {

    render(){
    return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
            {
                this.props.name.length > 0 
                ? `Which topic would you like to choose from ${this.props.name}?`
                : <Link to='/' class="ui primary button"  >Please Sign In </Link>
            } 
            {
                this.props.name.length > 0
            //     ? <Button onClick={this.props.signout} variant="contained" color="primary">
            //     SIGN OUT
            //   </Button>
                ? <Link to='/' class="ui primary button" >Sign Out </Link>
                : null
            }
        </h1>
        </header>
        

    </div>
    );}
}

export default Topics;