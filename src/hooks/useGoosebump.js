import { useState, useEffect, useContext } from 'react';
import { getGoosebump } from '../services/goosebump';

export function useGoosebump() {
  const [goosebump, setGoosebump] = useState([]);

  useEffect(() => {
    const fetchGoosebump = async () => {
      const data = await getGoosebump();
      setGoosebump(data);
    };
    fetchGoosebump();
  }, []);

  return { goosebump, setGoosebump };
}
