import { useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogin= () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const { dispatch } = useAuthContext()

    //async to use await inside
    const login = async (email,password) => {
        setError(null)
        setLoading(true)

        //log in user with email/password
        try {
            const res = await projectAuth.signInWithEmailAndPassword(email, password)

            // dispatch logout action
            dispatch({ type: 'LOGIN', payload: res.user })

            setLoading(false)
            //reset error in case any were present
            setError(null)
        }
        //catches errors if any exist
        catch(err){
            console.log(err.message)
            setError(err.message)
            setLoading(false)
        }
    }
    return { login, error, loading }

}