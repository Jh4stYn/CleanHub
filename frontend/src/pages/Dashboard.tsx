import React from "react";
import MapView from "../components/mapa/MapView";

const Dashboard: React.FC = () => {
  return (
    <div style={{ height: "100vh", width: "80%", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Gestión de Residuos - Rutas de Acopio</h1>
      <MapView />
    </div>
  );
};

export default Dashboard;