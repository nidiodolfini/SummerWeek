import { useState, useEffect } from 'react'
import api from '../services/api'

export default function useAxios(method = 'get', url, data = null) {

    const [response, setResponse] = useState([])
    const [error, setError] = useState([])

    function fetchData () {

        api[method](url, data)
        .then(
            success => {

                setResponse(success)

            }
        )
        .catch(
            error => {

                setError(error)

            }
        )

    }

    useEffect(
        () => {

            fetchData()

        }, []
    )

    return [response, error]

}