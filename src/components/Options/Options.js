import React, { useState } from 'react';
import { useGoosebump } from '../../hooks/useGoosebump';
import { useParams } from 'react-router-dom';

export default function Options({ id, page_id, target_page, option_text }) {
  return (
    <div><a href={`http://localhost:3000/pages/${target_page}`}>{option_text}</a></div>
  );
}