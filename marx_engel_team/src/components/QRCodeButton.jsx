import * as QRCode from 'qrcode.react';


import { useState } from "react"
import styles from "../styles/QRCodeButton.module.css"

const QRCodeButton = () => {
    const [showQRCode, setShowQECode] = useState(false)

  return (
    <div className={styles.container}>
        <button onClick={() => setShowQECode(!showQRCode)}>
            {showQRCode ? "Ocultar QR Code" : "Gerar QR Code para pagamento"}
        </button>
        {showQRCode && <QRCode value="https://linkparapagamento.com" size={200} />}
      
    </div>
  )
}

export default QRCodeButton
