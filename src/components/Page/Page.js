import React, { useState } from 'react';
import { useGoosebump } from '../../hooks/useGoosebump';
import './Book.css';
import { useParams } from 'react-router-dom';
import Options from '../Options/Options';

export default function Page() {
  const { id } = useParams();
  const { goosebump, setGoosebump } = useGoosebump(id);
  let optionsText;
  let options;
  let targetPage;
  if (goosebump.options) {
    optionsText = goosebump.options[0].option_text;
    targetPage = goosebump.options[0].target_page;
    options = goosebump.options;
    return (
      <main className="main">
        <div className="main-text"> {goosebump.pageText}</div>
        <div className="options2">
          {options.map((item) => (
            <Options key={item.id} {...item} />
          ))}
        </div>
      </main>
    );
  }
}
