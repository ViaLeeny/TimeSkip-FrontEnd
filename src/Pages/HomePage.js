import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Link } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import { signin } from "../Services/api"


class HomePage extends React.Component {

state = {
    username: "", 
    password: ""
}

    handleSubmit = () => {
        signin(this.state.username, this.state.password).then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            this.props.signin(data.username);
        }
        });
    };

    signUp

    render(){
    return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>TimeSkip</h1>
        <div>

    <Form>
        <label>Username</label>
        <Form.Field>
        <input placeholder='Username' />
        </Form.Field>
        <label>Password</label>
        <Form.Field>
        <input placeholder='Password' />
        </Form.Field>
        <Form.Field>
        </Form.Field>
        <br />
        <button class="ui primary button" onClick={this.handleSubmit}>Sign In</button>
        <button class="ui secondary button">Sign Up</button>
    </Form>

        </div>

        </header>
        

    </div>
    );}
}

export default HomePage;