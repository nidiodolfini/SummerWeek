import { useState, useEffect } from 'react'
import api from '../services/api'

export default function useAxios(method, url, data = null) {

    const [response, setResponse] = useState([])
    const [error, setError] = useState([])

    useEffect(
        () => {

            function apiDataHandler () {
                api[method](url, data)
                .then(
                    success => {

                        setResponse(success.data)

                    }
                )
                .catch(
                    error => {

                        setError(error)

                    }
                )
            }

            apiDataHandler()

        }, []
    )

    return response

}