import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password);
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">CleanHub</h1>
        <p className="login-subtitle">Inicia sesión para continuar</p>

        <form onSubmit={handleSubmit}>
          <input
            className="login-input"
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="login-input"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
