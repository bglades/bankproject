import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import React from 'react'
// style import 
import styles from './Navbar.module.css'



export default function Navbar() {
  //destructure logout function
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>GoodBank</li>
            
            {!user && (
            <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            </>
            )}
            {user && (
              <>
              <li>Welcome, {user.displayName}</li>
            <li>
              <button className='btn' onClick={logout}>Logout</button>
            </li>
            </>
            )}
            
        </ul>

    </nav>
  
  )
}
