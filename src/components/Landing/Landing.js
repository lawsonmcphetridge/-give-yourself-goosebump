import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default function Landing() {
  return (
    <main className="landing-main">
      <Link to="/pages/1" className="book-one" />
      <Link to="/pages/137" className="book-two" />
    </main>
  );
}
