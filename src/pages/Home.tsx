import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Map from "../components/Map";
import "../styles/home.css";

export default function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">CleanHub</h1>
        <button onClick={handleLogout} className="logout-button">
          Cerrar sesión
        </button>
      </header>

      <main className="home-main">
        <Map />

        <div className="home-options">
          <div className="home-card">
            <h3>Reportar problema</h3>
            <p>Informa sobre puntos de acumulación de basura.</p>
          </div>
          <div className="home-card">
            <h3>Educación ambiental</h3>
            <p>Aprende cómo separar correctamente los residuos.</p>
          </div>
          <div className="home-card">
            <h3>Rutas de recolección</h3>
            <p>Consulta horarios y ubicaciones de los camiones.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
