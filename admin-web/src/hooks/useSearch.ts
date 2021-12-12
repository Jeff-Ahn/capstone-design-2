import { useState } from 'react'
import { getScamData } from '../lib/api';

const useSearch = () => {
  const [result, setResult] = useState(null);

  const onSearch = async (value: string) => {
    const data = await getScamData(value);
    setResult(data);
  };

  return { result, onSearch };
}

export default useSearch;
