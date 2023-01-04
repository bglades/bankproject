import { useReducer, useEffect, useState } from 'react'
import { projectFirestore, timestamp } from '../firebase/config'

//updates later in firestoreReducer
let initialState = {
    document: null,
    loading: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
      case "LOADING":
        return {success: false, loading: true, error: null, document: null}
      case "ERROR":
        return {success: false, loading: false, error: action.payload, document: null}
      case "ADDED_DOC":
        return {success: true, loading: false, error: null, document: action.payload}
      default:
        return state
    }
  }

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled] = useState(false)

    //collection ref
    const ref = projectFirestore.collection(collection)

  // only dispatch if not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }

    //add document
    const addDocument = async (doc)=> {
        dispatch({ type: 'LOADING' })

        try{
            const timeOf = timestamp.fromDate(new Date())
            const addedDoc = await ref.add({...doc, timeOf})
            dispatchIfNotCancelled({ type: "ADDED_DOC", payload: addedDoc })
        }
        catch(err){
            dispatchIfNotCancelled({ type: 'ERROR', payload: err.message})
        }
    }
    //delete document
    const deleteDocument = async (id) => {

    }

    useEffect(() => {
        return () => setIsCancelled(true)
      }, [])
    

    return { addDocument, deleteDocument, response }
}