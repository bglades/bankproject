import { useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import React from 'react'
import styles from './Home.module.css'

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
            <h3>Manage Funds</h3>
            <div className={styles.checkbox}>
            <input type='checkbox' id='deposit' />
          <label for = 'deposit'> Deposit </label>
            <input type='checkbox' id='withdraw'/> 
          <label for = 'withdraw'>Withdraw </label>
          </div>
            <span>Amount:</span>
            <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}>
            </input>
        </label>
        <button>Confirm</button>
    </form>
   <br/>
   
    </>
  )
}
