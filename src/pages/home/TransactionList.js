import { useFirestore } from '../../hooks/useFirestore'

// styles
import styles from './Home.module.css'

export default function TransactionList({ transactions }) {

 
    // const sumWithInitial = transactions.reduce(
    //     (accumulator, currentValue) => accumulator + currentValue,
    //     0
    //   );
    //   console.log(sumWithInitial)

  return (
      <>
 
    <ul className={styles.transactions}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>

          <p className={styles.amount}>${transaction.amount} - Deposit</p>
          
        </li>
        
      ))}
    </ul>
    </>
  )
}