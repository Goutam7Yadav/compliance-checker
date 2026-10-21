import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    username: "",
    password: "",
    role: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/register", form)
      .then(() => {
        alert("User registered successfully!");
        navigate("/login");
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="full_name" placeholder="Full Name" onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} />
      <input name="username" placeholder="Username (optional)" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <select name="role" onChange={handleChange}>
        <option value="Admin">Admin</option>
        <option value="Inspector">Inspector</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
