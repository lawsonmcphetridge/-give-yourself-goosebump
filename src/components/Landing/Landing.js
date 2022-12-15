import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import './Landing.css';
import goose from './goose-text.png';
import { signOut } from '../../services/auth';

export default function Landing() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <main className="landing-main">
      <div>
        <img className="landing-goose" src={goose}></img>
        <p className="risk">READ AT YOUR OWN RISK</p>
      </div>
      <div className="books">
        <Link className="book-one" to="/pages/1" />
        <Link className="book-two" to="/pages/137" />
      </div>
      <div className="sign-out-container">
        <button className="sign-out" onClick={handleSignOut}>
          CAN&apos;T TAKE ANY MORE ! ?
        </button>
      </div>
    </main>
  );
}
