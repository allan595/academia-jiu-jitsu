import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/Home.module.css"

const Home = () => {
  return (
    <div className={styles.container}>
        <Header/> 
        <main className={styles.main}>
        <img src="/src/assets/logo1.png" alt="Logo da academia" className={styles.logo} />
            <h1>Bem-vindo à academia de jiu-jitsu Marx Engel Team</h1>
            <p>Desenvolvendo força, técnica e disciplina.</p>

        </main>
        <Footer/>
    </div>
  )
}

export default Home
