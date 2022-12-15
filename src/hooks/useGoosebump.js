import { useState, useEffect } from 'react';
import { getGoosebump, postGoosebump } from '../services/goosebump';

export function useGoosebump(id) {
  const [goosebump, setGoosebump] = useState([]);

  useEffect(() => {
    const fetchGoosebump = async () => {
      const data = await getGoosebump(id);
      setGoosebump(data);
    };
    fetchGoosebump();
  }, [id]);

  return { goosebump, setGoosebump };
}

export function useGoosebumpPost(id) {
  const [goosebump, setGoosebump] = useState([]);

  useEffect(() => {
    const fetchGoosebump = async () => {
      const data = await postGoosebump(id);
      setGoosebump(data);
    };
    fetchGoosebump();
  }, [id]);

  return { goosebump, setGoosebump };
}
