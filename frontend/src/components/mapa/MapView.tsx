import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Punto {
  id: number;
  nombre: string;
  latitud: number;
  longitud: number;
}

const MapView: React.FC = () => {
  const [puntos, setPuntos] = useState<Punto[]>([]);
  const centerPosition: [number, number] = [-16.39889, -71.535];

  useEffect(() => {
    fetch("http://localhost:3000/api/puntos")
      .then((res) => res.json())
      .then((data) => setPuntos(data));
  }, []);

  return (
    <MapContainer center={centerPosition} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {puntos.map((p) => (
        <Marker key={p.id} position={[p.latitud, p.longitud]}>
          <Popup>{p.nombre}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
