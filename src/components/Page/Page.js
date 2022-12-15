import React from 'react';
import { useGoosebump } from '../../hooks/useGoosebump';
import './Book.css';
import { Redirect, useParams } from 'react-router-dom';
import Options from '../Options/Options';
import { postGoosebump } from '../../services/goosebump';

export default function Page() {
  const { id } = useParams();
  const { goosebump } = useGoosebump(id);
  console.log('params', id);
  if (goosebump.id && id && goosebump.id !== id) {
    return <Redirect to={`/pages/${goosebump.id}`} />;
  }

  let optionsText;
  let options;
  let targetPage;
  if (goosebump.options) {
    optionsText = goosebump.options[0].option_text;
    targetPage = goosebump.options[0].target_page;
    options = goosebump.options;
    if (id % 136 === 0) {
      return (
        <main className="main">
          <div className="main-text">
            <div className="end">THE END</div>
          </div>
          <div className="options2">
            {options.map((item) => (
              <Options key={item.id} {...item} />
            ))}
          </div>
          <div>
            <a href={`http://localhost:3000/home`}>Go to bookcase</a>
          </div>
        </main>
      );
    } else {
      return (
        <main className="main-page">
          <div className="page-container">
            <div className="main-text slide-left">
              {console.log('bookid', goosebump.bookId)}
              {goosebump.bookId === '1' ? (
                <h2 className="book-title">Escape From The Carnival Of Horrors</h2>
              ) : (
                <h2 className="book-title">Beware Of The Purple Peanut Butter</h2>
              )}

              <pre> {goosebump.pageText}</pre>
            </div>
            <div className="margin">
              <div className="options">
                {options.map((item) => (
                  <Options key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </main>
      );
    }
  }
}
