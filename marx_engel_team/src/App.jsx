import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignUpPage from "./pages/SignUpPage"
import Sobre from "./pages/Sobre"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/sobre" element={ <Sobre /> } />
      </Routes>
    </Router>
  )
}

export default App
