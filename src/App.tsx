import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import type { JSX } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
