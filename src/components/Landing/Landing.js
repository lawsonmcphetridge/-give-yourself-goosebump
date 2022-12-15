import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Header from '../Header/Header';
import './Landing.css';
import goose from './goose-text.png';

export default function Landing() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return (
    <main className="landing-main">
      <div>
        <img className="landing-goose" src={goose}></img>
        <p className="risk">READ AT YOUR OWN RISK</p>
      </div>
      <div className="books">
        <div className="book-one">
          <Link to="/pages/1" />
        </div>
        <div className="book-two">
          <Link to="/pages/137" />
        </div>
      </div>
    </main>
  );
}
