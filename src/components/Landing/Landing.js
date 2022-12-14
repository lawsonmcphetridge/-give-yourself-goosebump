import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import './Landing.css';

export default function Landing() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return (
    <main className="landing-main">
      <Link to="/pages/1" className="book-one" />
      <Link to="/pages/137" className="book-two" />
    </main>
  );
}
