import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css'

// Import your components
import App from './App.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import AdminDashboard from './AdminDashboard.jsx'
import InspectorDashboard from './InspectorDashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<App />} />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Role-based dashboards */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/inspector" element={<InspectorDashboard />} />
      </Routes>
    </Router>
  </StrictMode>,
)
