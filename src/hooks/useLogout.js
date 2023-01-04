import { useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogout= () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const { dispatch } = useAuthContext()

    //async to use await inside
    const logout = async () => {
        setError(null)
        setLoading(true)

        //log out user using signOut method
        try {
            await projectAuth.signOut()

            // dispatch logout action
            dispatch({ type: 'LOGOUT' })

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
    return { logout, error, loading }

}