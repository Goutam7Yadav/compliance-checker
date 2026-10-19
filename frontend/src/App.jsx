import { useState, useEffect } from 'react'
import axios from 'axios'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])

  // Fetch users from backend when component loads
  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>Edit <code>src/App.jsx</code> and save to test <code>HMR</code></p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      {/* Show users fetched from backend */}
      <section>
        <h2>Users from Backend</h2>
        <ul>
  {users.map(user => (
    <li key={user.id}>
      {user.username} — Role: {user.role}
    </li>
  ))}
</ul>

      </section>
    </>
  )
}

export default App
