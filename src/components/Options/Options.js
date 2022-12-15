import { useCallback } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useGoosebumpPost } from '../../hooks/useGoosebump';
import { postGoosebump } from '../../services/goosebump';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const THIS_URL = process.env.REACT_APP_THIS_URL;

export default function Options({ sourceId, target_page, option_text }) {
  const history = useHistory();
  const postRequest = async () => {
    await fetch(`${BASE_URL}/api/v1/pages/${target_page}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ sourceId }),
      credentials: 'include',
    });
  };
  return (
    <div className="option">
      <Link to={`/pages/${target_page}`} onClick={postRequest}>
        {option_text}
      </Link>
    </div>
  );
}
