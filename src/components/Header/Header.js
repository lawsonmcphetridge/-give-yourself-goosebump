import React from 'react';
import goose from './goose-text.png';
import './Header.css';

export default function Header() {
  return (
    <header>
      <h1 className="title">Give yourself</h1>
      <img className="goose-text" src={goose}></img>
    </header>
  );
}
