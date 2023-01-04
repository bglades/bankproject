import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
//styles
import styles from './Signup.module.css'

import React from 'react'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const { signup, loading, error} = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, displayName)
    }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
        <h2>Signup</h2>
        <label>
            <span>Name:</span>
            <input 
              type="text"
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
            />
        </label>
        <label>
            <span>Email:</span>
            <input 
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
        </label>
        <label>
            <span>Password:</span>
            <input 
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
        </label>
        {!loading && <button className='btn'>Signup</button>}
        {loading && <button className='btn' disabled>loading</button>}
        { error && <p>{error}</p>}
    </form>
  )
}