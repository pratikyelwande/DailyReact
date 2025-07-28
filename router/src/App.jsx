import { Routes, Route, Link } from "react-router-dom";
import User from "./User";
import Search from "./Search";

function App() {
  return (
    <div>
      <nav className="p-4 bg-gray-100">
        <Link to="/search?name=pratik&age=25">Search</Link>
      </nav>

      <div className="p-4">
        <Routes>
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
