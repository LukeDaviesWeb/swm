import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const WithData = (WrappedComponent) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
                const res = await axios('codetestjson.json');
                setData(res.data);
            } catch (error) {
                setIsError(true)
            }
            setIsLoading(false);
        }

        fetchData();
    }, []);

    const RequiresData = (props) => {
        return <WrappedComponent data={data} isLoading={isLoading} isError={isError} {...props} />;
    };


    return RequiresData;
}