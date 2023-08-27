import { useState, useEffect} from 'react';
import axios from 'axios';

import { RAPID_API_KEY } from '@env';

const rapidApiKey = RAPID_API_KEY;

const useFetchHook = (query) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${query}`,
        params: {
          query: 'Python developer in Texas, USA',
          page: '1',
          num_pages: '1'
        },
        headers: {
          'X-RapidAPI-Key': '',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
  return (
    <div>
      
    </div>
  )
}

export default useFetchHook
