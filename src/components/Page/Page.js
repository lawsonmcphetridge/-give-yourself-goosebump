import React, { useState } from 'react';
import { useGoosebump } from '../../hooks/useGoosebump';
import './Book.css';
import { useParams } from 'react-router-dom';


export default function Page() {
  const { id } = useParams();
  const { goosebump, setGoosebump } = useGoosebump(id);
  let options;
  let targetPage;
  console.log(goosebump);
  if (goosebump.options) {
    options = goosebump.options[0].option_text;
    targetPage = goosebump.options[0].target_page;
  }
  return (
    <main className="main">
      <div className="main-text"> {goosebump.pageText}</div>
      <div className="options">{options}</div>
      {/* 
      <div className="options">
      options().map((item)) => (
      key = {options.id} {...options}) /> */}
    </main>
  );
}
