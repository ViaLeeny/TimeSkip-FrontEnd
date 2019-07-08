import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Link } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import { signin } from "../Services/api"


class SignInForm extends React.Component {

    //STATE FOR USER LOGIN DETAILS TYPED IN FORM
    state = {
        name: "", 
        password: ""
    }


    //CHANGE STATE AS USER TYPES
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //SUBMIT USERNAME AND PASSWORD FOR AUTHENTIFICATION
    handleSubmit = () => {
        signin(this.state.name, this.state.password)
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                this.props.signIn(data.name);
            }
        });
    };


    //USER LOGIN FORM
    render(){
    const {name, password} = this.state
    const {handleChange, handleSubmit} = this
    return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Sign In To TimeSkip</h1>
        <div>

    <Form>
        <label>Username</label>
        <Form.Field>
        <input name="name" value={name} placeholder='Username' onChange={handleChange}/>
        </Form.Field>
        <label>Password</label>
        <Form.Field>
        <input type="password" name="password" value={password} placeholder='Password' onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
        </Form.Field>
        <br />
        <Link to='/Topics' class="ui primary button" onClick={handleSubmit} >Submit</Link>
        {/* <button class="ui primary button" onClick={handleSubmit}>Submit</button> */}
    </Form>

        </div>
        </header>
        

    </div>
    );}
}

export default SignInForm;