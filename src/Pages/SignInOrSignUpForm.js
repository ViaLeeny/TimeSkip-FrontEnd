import React from 'react'
import { Button, Form } from 'semantic-ui-react'


class SignInOrSignUpForm extends React.Component{
    render(){
    return(<div>
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
            <button class="ui primary button">Sign In</button>
            <button class="ui secondary button">Sign Up</button>
        </Form>
    </div>
 )
 }
}
 export default SignInOrSignUpForm 