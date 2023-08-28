import { useState, useEffect} from 'react';
import axios from 'axios';

import { RAPID_API_KEY } from '@env';

const rapidApiKey = RAPID_API_KEY;

const useFetchHook = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchedData = async () => {
        setLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            alert('Something went wrong!')
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchedData();
    },[])

    const refetch = () => {
        setLoading(true);
        fetchedData();
    }

    return { data, loading, error, refetch };
}


export default useFetchHook;