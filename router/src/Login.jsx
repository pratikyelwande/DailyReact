import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // fake login success
    if (username.trim() !== "") {
      navigate("/dashboard"); // 🔁 programmatic navigation
    } else {
      alert("Enter username");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-xl mb-2">🔐 Login</h1>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 mb-2 block"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Login
      </button>
    </form>
  );
}

export default Login;
