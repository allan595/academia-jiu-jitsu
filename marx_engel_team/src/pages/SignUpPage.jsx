import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import QRCodeButton from "../components/QRCodeButton"
import styles from "../styles/SignUpPage.module.css"

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //Integração com o backend será feito posteriormente
    }
  return (
    <div className={styles.container}>
        <Header/>
        <main className={styles.main}>
            <h2>Faça Sua Inscrição</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                    Nome: 
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Telefone:
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </label>
                <button type="submit">Inscrever-se</button>
            </form>
            <QRCodeButton/>
        </main>
      <Footer/>
    </div>
  )
}

export default SignUpPage
