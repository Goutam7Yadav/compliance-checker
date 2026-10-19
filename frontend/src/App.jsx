import './App.css'
import heroImg from './assets/hero.png'
import { useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate();

  return (
    <section id="landing">
      <div className="hero">
        <img src={heroImg} alt="Compliance Checker Logo" width="170" height="179" />
      </div>

      <h1>Compliance Checker</h1>
      <p>
        Scan packaged commodities and ensure compliance with 
        Legal Metrology (Packaged Commodities) Rules, 2011.
      </p>

      <div className="buttons">
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>
    </section>
  )
}

export default App
