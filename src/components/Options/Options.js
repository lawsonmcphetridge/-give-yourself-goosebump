import React from 'react';


export default function Options({ target_page, option_text }) {
  return (
    <div><a href={`http://localhost:3000/pages/${target_page}`}>{option_text}</a></div>
  );
}