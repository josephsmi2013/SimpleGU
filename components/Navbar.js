import styles from '@/styles/Navbar.module.css'
import Link from "next/link";


export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.ul}>
          <Link className={styles.linkHome} href="./">Home</Link>
          <Link className={styles.link} href="about">About</Link>              
          <Link className={styles.link} href="services">Services</Link>
          <Link className={styles.link} href="cards">Cards</Link>        
      </ul>
    </nav>
  )
}
