import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const WithData = (WrappedComponent) => {
    const [data, setData] = useState({});
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('codetestjson.json')
            .then(res => {
                setData(res.data);
                setLoad(true);
            })
            .catch(err => {
                setError(err.message);
                setLoad(true)
            })
    }, []);

    const RequiresData = (props) => {
        return <WrappedComponent data={data} load={load} error={error} {...props} />;
    };


    return RequiresData;
}