import { useEffect, useState } from "react";

export function useFetch(url: string) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState<boolean>(true);

    async function handleFetch() {
        try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    }

    useEffect(() => {
        handleFetch();
    }, [url]);

    return { data, loading };
}
