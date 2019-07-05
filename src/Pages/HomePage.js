import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Link } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import { signin } from "../Services/api"


class HomePage extends React.Component {


    render(){
    return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>TimeSkip</h1>
        
        <div>
        <Link to='/signin' class="ui primary button"  >Sign In </Link>
        <Link to='/signup' class="ui secondary button" >Sign Up </Link>
        {/* <button class="ui primary button" onClick={this.handleSubmit}>Sign In</button> */}
        </div>
        </header>
        

    </div>
    );}
}

export default HomePage;