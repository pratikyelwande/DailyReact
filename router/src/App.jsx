import { Routes, Route, Link } from "react-router-dom";
import Login from "./login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <nav className="p-4 bg-gray-100">
        <Link to="/login" className="mr-4">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <div className="p-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
