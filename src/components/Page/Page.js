import React, { useContext } from 'react';
import { useGoosebump } from '../../hooks/useGoosebump';
import './Book.css';
import { Link, Redirect, useParams } from 'react-router-dom';
import Options from '../Options/Options';

import { signOut } from '../../services/auth';
import { UserContext } from '../context/UserContext';

export default function Page() {
  const { id } = useParams();
  const { goosebump } = useGoosebump(id);
  const { user } = useContext(UserContext);
  // if (goosebump.id && id && goosebump.id !== id) {
  //   return <Redirect to={`/pages/${goosebump.id}`} />;
  // }

  const handleSignOut = async () => {
    await signOut();
  };

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  let pageNumber;
  let optionsText;
  let options;
  let targetPage;
  if (goosebump.options) {
    optionsText = goosebump.options[0].option_text;
    targetPage = goosebump.options[0].target_page;
    options = goosebump.options;
    pageNumber = id % 136;
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
            <Link className="go-bookcase" to={`/home`}>
              Home
            </Link>
          </div>
        </main>
      );
    } else {
      return (
        <main className="main-page">
          <div className="page-container">
            <div className="page-number">{pageNumber}</div>
            <div className="main-text slide-left">
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
          <div className="home-link">
            <Link className="go-home" to={`/home`}>
              Home
            </Link>
            <button className="sign-out" onClick={handleSignOut}>
              TOO SCARED ! ?
            </button>
          </div>
        </main>
      );
    }
  }
}
