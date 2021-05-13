import {useState, useEffect} from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getData = async (url) => {
            try {
                let response = await fetch(url)

                if(!response.ok){
                    throw {
                        err: true, 
                        status: response.status, 
                        statusText: !response.statusText ? "Ocurrio un error" : response.statusText
                    }
                }

                let data = await response.json()
                
                setData(data)
                setError({err: false})                         
                setIsPending(false)
            } catch (err) {
                setError(err)
                setIsPending(true)
            }
        }

        getData(url)
    }, [url])

    return {data, isPending, error}
}
