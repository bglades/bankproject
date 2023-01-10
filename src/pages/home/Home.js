// import styles
import styles from './Home.module.css'

import React from 'react'
import Balance from './Balance'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

import { useState } from 'react'
import TransactionList from './TransactionList'



export default function Home() {
  const { user } = useAuthContext()
  const [amount, setAmout] = useState()
  const { documents, error } = useCollection(
    'transactions',
    ['uid','==',user.uid]
    )

  return (
    <div className={styles.container}>
      <div className={styles.content}>
  
      {documents && <TransactionList transactions={documents} />}
   
   
      </div>
      <div className={styles.sidebar}>
      <Balance uid={user.uid} />

      </div>
    </div>
  )
}
