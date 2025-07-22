import React from 'react';
import './Login.css';
import { Button } from '@mui/material';
import teamflow from './teamflowlogo.svg';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Signed in:", result.user);
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user
        })
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={teamflow} alt="Teamflow Logo" />
        <h1>Sign In to Teamflow</h1>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
