import React from 'react';

import './Sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../Custom-button/custom-button.component';
import { signinwithGoogle } from '../../firebase/firebase.utils';

class Signin extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e =>{
        e.preventDefault();

        this.setState({email:'' , password:''});
    }

    handleChange = e =>{
        const {value , name} = e.target;
        this.setState({[name] : value})
    }

    render(){
        return (
            <div className="sign-in-form">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form  onSubmit={this.handleSubmit}>
                    <FormInput name="email" 
                    type="email"
                    value ={this.state.email}
                    label='Email'
                    handleChange={this.handleChange}
                    required/>
    
                    <FormInput name="password"
                    type="password" 
                    value ={this.state.password}
                    label='Password'
                    handleChange={this.handleChange}
                    required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign in </CustomButton>
                        <CustomButton onClick={signinwithGoogle} GoogleSignin>
                            
                            Sign in with Google
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default Signin;