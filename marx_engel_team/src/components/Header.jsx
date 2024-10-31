import styles from "../styles/Header.module.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className={styles.header}>
        <img src="/logo.png" alt="Logo da academia" className={styles.logo}/>
        <span className={styles.title}>MARX ENGEL TEAM - BRAZILIAN JIU-JITSU</span>
        <nav className={styles.nav}>
            <Link to="/" className={styles.navLink} >Home</Link>
            <Link to="/signUpPage" className={styles.navLink} >Inscrição</Link>
            <Link to="/sobre" className={styles.navLink} >Sobre</Link>
        </nav>
    </header>
  )
}

export default Header
