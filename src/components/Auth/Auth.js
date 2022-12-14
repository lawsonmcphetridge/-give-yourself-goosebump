import React, { useState, useContext } from 'react';
import { signIn, signUpUser } from '../../services/auth';
import { UserContext } from '../context/UserContext';
import './Auth.css';
import { NavLink, Redirect, useParams } from 'react-router-dom';

export default function Auth() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { type } = useParams();
  const { user, setUser } = useContext(UserContext);

  const submitAuth = async (email, password, type) => {
    if (type === 'sign-up') {
      const userResp = await signUpUser(email, password);
      setUser(userResp);
    } else {
      const userResp = await signIn(email, password);
      setUser(userResp);
    }
  };

  if (user) {
    return <Redirect to="/home" />;
  }

  return (
    <main>
      <div className="switch">
        <NavLink style={{ textDecoration: 'none' }} className="sign-in-toggle" to="/auth/sign-in">
          Sign in
        </NavLink>
        <NavLink style={{ textDecoration: 'none' }} className="sign-in-toggle" to="/auth/sign-up">
          Sign up
        </NavLink>
      </div>
      <div className="form">
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
        {type === 'sign-up' && (
          <button onClick={() => submitAuth(email, password, type)}>Sign up</button>
        )}
        {type === 'sign-in' && (
          <button onClick={() => submitAuth(email, password, type)}>Sign in</button>
        )}
      </div>
    </main>
  );
}


