import { useState, useEffect, useContext } from 'react';
import { getGoosebump } from '../services/goosebump';

export function useGoosebump(id) {
  const [goosebump, setGoosebump] = useState([]);

  useEffect(() => {
    const fetchGoosebump = async () => {
      console.log('id', id);
      const data = await getGoosebump(id);
      setGoosebump(data);
    };
    fetchGoosebump();
  }, [id]);

  return { goosebump, setGoosebump };
}
