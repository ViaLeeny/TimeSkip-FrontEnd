import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Link } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import { signin } from "../Services/api"


class SignUpForm extends React.Component {

    state = {
        name: "", 
        password: ""
    }
    
    
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
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
    const {name, password} = this.state
    const {handleChange} = this
    return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Create your TimeSkip Account</h1>
        <div>

    <Form>
        <label>Name</label>
        <Form.Field>
        <input name="name" placeholder='Name' value={name} placeholder='Name' onChange={handleChange} />
        </Form.Field>
        <label>Password</label>
        <Form.Field>
        <input name="password" placeholder='Password' value={password} placeholder='Password' onChange={handleChange} />
        </Form.Field>
        <Form.Field>
        </Form.Field>
        <br />
        <button class="ui primary button">Submit</button>
    </Form>

        </div>

        </header>
        

    </div>
    );}
}

export default SignUpForm;