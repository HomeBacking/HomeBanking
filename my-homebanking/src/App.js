import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/views/dashboard/Dashboard";
import Layout from "./components/views/layout/Layout";
import LoginView from "./components/views/login/LoginView";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./routes/privateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Ruta publica */}

          <Route path="login" element={<LoginView />} />

          {/* Se deben proteger mas adelante */}
          <Route element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

          {/* Este ruta es provisoria, mas adelante vere si realmente necesito que este aca */}
          <Route path="transacciones" element={<h1>transacciones</h1>} />
          {/* error 404 (si no encuentra la pagina) */}
          <Route path="*" element={<h1>Pagina no encontrada</h1>} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
