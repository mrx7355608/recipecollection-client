import { useEffect, useState } from 'react';
import { getRecipes } from '../services/recipes';

export default function useRecipes() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async function () {
            try {
                const response = await getRecipes();
                setLoading(false);
                setRecipes(response);
            } catch (err) {
                setLoading(false);
                setError(err.message);
            }
        })();
    }, []);

    return { recipes, error, loading };
}
