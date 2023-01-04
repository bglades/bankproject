import { useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import React from 'react'


export default function Balance( { uid }) {
    const [amount, setAmount] = useState('')
    const { addDocument, response } = useFirestore('transactions')
    
   
   
    const handleSubmit = (e) => {
        e.preventDefault()
        
        addDocument({
            uid: uid,
            amount
        })
      setAmount('')
    }


  return (
    <>
    

    <form onSubmit={handleSubmit}>
        <label>
            <h3>Make a Deposit</h3>
            <span>Amount:</span>
            <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}>
            </input>
        </label>
        <button>Deposit</button>
    </form>
   <br/>
    </>
  )
}
