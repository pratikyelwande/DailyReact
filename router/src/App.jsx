import { Routes, Route, Link } from "react-router-dom";
import Home from "/Home";
import Users from "./Users";

function App() {
  return (
    <div>
      <nav className="p-4 bg-gray-200">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/users">Users</Link>
      </nav>

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/*" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
