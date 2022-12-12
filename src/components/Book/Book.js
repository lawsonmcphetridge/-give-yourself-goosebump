import React from 'react';
import { useGoosebump } from '../../hooks/useGoosebump';
import './Book.css';

export default function Book() {
  const { goosebump, setGoosebump } = useGoosebump();
  console.log(goosebump);
  return (
    <div className="main">
      <div>Hello world!</div>
    </div>
  );
}
