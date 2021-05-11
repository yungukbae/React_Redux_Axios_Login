import { useState, useEffect } from 'react';


const useFetch = (url) => {

    const [data, setdata] = useState(null);
    const [isPending, setIspPending] = useState(true);
    const [error, seterror] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch data for that resource');
            }
            console.log(res)
            return res.json();
        })
        .then((data) => {
            setdata(data);
            setIspPending(false);
            seterror(null);
        })
        .catch((err) => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted')
            }else{
            setIspPending(false);
            seterror(err.message);   
            }
        })
        }, 1000);

        return () => abortCont.abort();

    },[url]);

    return { data, isPending, error }

}

export default useFetch;