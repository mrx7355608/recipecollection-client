import { useEffect, useState } from 'react';

export default function useFetch(url) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setLoading(false);
                setData(data);
            })
            .catch((err) => {
                setLoading(false);
                setError(err.message);
            });
    }, []);

    return { loading, data, error };
}
