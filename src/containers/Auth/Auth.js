import React, { Component } from 'react';
import axios from 'axios';
import Input from '../../components/Input/Input';
import instance from '../../axios-firebase';
import {Redirect, withRouter} from 'react-router';

class Auth extends Component {
    state = {
        email: '',
        password: '',
        isSignup: true,
        authenticated : false,
        userId : null,
    }
    
    inputChangeHandler(event) {
        this.setState({ [event.target.attributes.inputtype.value]: event.target.value }
        )
    }

    submitHandler() {
        console.log(this.state);
        let authData = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        }
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBb_JeCCGfj7QHI9PEqrObxx1Sxf_hQDLE'
        
        if (!this.state.isSignup)
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBb_JeCCGfj7QHI9PEqrObxx1Sxf_hQDLE'
        
            axios.post(url, authData)
            .then((response) => {
                console.log('User Id', response.data.localId);
                if (this.state.isSignup) {
                    instance.post('/userInfo.json', {
                        id: response.data.localId,
                        email: response.data.email,
                        role : 'user'
                    })
                    .then(console.log('success'))
                    .catch((err) => console.log(err));
                }
                else{
                    this.setState({
                        authenticated : true,
                        userId : response.data.localId
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    switchAuthModeHandler() {
        this.setState(prevState => {
            return { isSignup: !prevState.isSignup }
        })
    }

    render() {
        return <div>
            <Input
                value={this.state.email}
                label='email'
                inputtype='email'
                onInputChange={this.inputChangeHandler.bind(this)} />
            <Input
                value={this.state.password}
                label='password'
                inputtype='password'
                onInputChange={this.inputChangeHandler.bind(this)} />

            <button 
                onClick={() => this.submitHandler()}>
                {this.state.isSignup?'Signup':'Signin'}
            </button>
            <button
                onClick={() => this.switchAuthModeHandler()}>
                Switch to {this.state.isSignup ? 'Signin' : 'Signup'}
            </button>
             {(this.state.authenticated && 
             <Redirect to={`/user/id:${this.state.userId}`} />) } 
        </div>
    }
}

export default withRouter(Auth);