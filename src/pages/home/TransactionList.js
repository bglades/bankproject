import { useFirestore } from '../../hooks/useFirestore'
import { useState } from 'react'
// styles
import styles from './Home.module.css'

export default function TransactionList({ transactions}) {
  

   let result = transactions.map(obj => parseInt(obj.amount));
   console.log(result)
   let total = result.reduce((
        (accumulator, currentValue) => accumulator + currentValue), null)


    // get date
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let currentDate = `${month}-${day}-${year}`;


  console.log(total)
  return (
      <>
 <div className={styles.total}> 
 <h1> Balance: ${total} </h1>
 <br />
 <h4> This is your balance as of {currentDate}</h4>
</div>
<div className={styles.transactions}>
 <h2> Transaction History:</h2>
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={styles.amount}>${transaction.amount}</p>

        </li>

      ))}
    </ul>  
   </div>
   
    </>
  )
}