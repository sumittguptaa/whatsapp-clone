import React from 'react'
import {Button} from "@material-ui/core"
import "./Login.css";
import firebaseApp, { provider } from "./firebase"
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    const [{user} ,dispatch ] = useStateValue();

    const signIn = (e) => {
        firebaseApp.auth().signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type : actionTypes.SET_USER , 
                user : result.user
            })
        }
            )
        .catch(error =>
            <h1>{error.message}</h1>
            )
  }

    return (
        <div className="login" >
            <h1>Login</h1>
            <div className="login__container" >
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="imag" />
            
                <div className="login__text" >
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button type="submit" onClick={signIn} >
                    Sign With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
