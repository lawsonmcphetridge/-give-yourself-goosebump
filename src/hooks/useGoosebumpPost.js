import { useState, useEffect, useContext } from 'react';
import { postGoosebump } from '../services/goosebump';

export function useGoosebumpPost(id) {
  const [goosebump, setGoosebump] = useState([]);

  useEffect(() => {
    const fetchGoosebumpPost = async () => {
      const data = await postGoosebump(id);
    };
    fetchGoosebumpPost();
  }, [id]);

  return { goosebump, setGoosebump };
}
