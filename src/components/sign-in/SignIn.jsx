import React, { Component } from 'react'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';

import './SignIn.scss'


class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }


    handleSubmit= async e =>{
        e.preventDefault();
        const {email, password} = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email:'', password:''})
        } catch (error) {
            console.log('ERRor', error);
            alert(error.message)
        }
    }

    handleChange = e =>{
        const {value, name} = e.target;
        this.setState({[name]:value})
    }
    

    render() {

        return (
            <div className='sign-in'>
                <h2 className='title'> I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} 
                    label="Email"
                    required />

                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label='password' required />
                    <div className="buttons">

                        <CustomButton type='submit'>
                            Sign In
                        </CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Google signIn
                        </CustomButton>

                    </div>

                </form>
            </div>
        )
    }
}


export default SignIn;