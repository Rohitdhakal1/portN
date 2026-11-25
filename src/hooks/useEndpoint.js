import { useCallback, useState, useEffect } from "react";

const MIN_LOADING = 500;

export const useEndpoint = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [ms, setMs] = useState(null);
    const [error, setError] = useState(false);

    const load = useCallback(async () => {
        setLoading(true);
        setError(false);

        const start = performance.now();

        try {
            const res = await fetch(url, { cache: 'no-store' });
            const json = await res.json();
            const realMs = Math.round(performance.now() - start);
            const elapsed = performance.now() - start;

            if (elapsed < MIN_LOADING) {
                await new Promise((resolve) => setTimeout(resolve, MIN_LOADING - elapsed));

            }

            setData(json);
            setMs(realMs);

        } catch (error) {
            setError(true);

        }
        setLoading(false);
    }, [url]);

    useEffect(() => {
        load();
    }, [load])


    return { data, loading, ms, error, load };
}