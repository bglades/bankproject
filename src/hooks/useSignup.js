import { useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    //create state for error and loading
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const { dispatch } = useAuthContext()

    // used async because await is inside it
    const signup = async (email, password, displayName) => {
        setError(null)
        setLoading(true)

        try {
            // create new user with firebase auth
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)

            //if invalid response, this throws an error
            if(!res) {
                throw new Error( 'Could not complete signup')
            }
            //updates user with display name from displayName from form 
            await res.user.updateProfile({ displayName })

            // dispatch login action
            dispatch({ type: 'LOGIN', payload: res.user })

            setLoading(false)
            setError(null)
        }
        // if issues with signup, firebase will send an error, which we catch with this code:
        catch(err){
            console.log(err.message)
            setError(err.message)
            setLoading(false)
        }
    }

    return { error, loading, signup }
}