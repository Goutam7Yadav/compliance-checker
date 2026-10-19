import { useState } from "react";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({ fullName: "", username: "", password: "", role: "Inspector" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/register", form)
      .then(res => alert("User registered successfully!"))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="fullName" placeholder="Full Name" onChange={handleChange} />
      <input name="username" placeholder="Username" onChange={handleChange} />
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
