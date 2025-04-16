import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // тук можеш да добавиш и backend (json-server) регистрация
    alert("Registered!");
    navigate("/login");
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
