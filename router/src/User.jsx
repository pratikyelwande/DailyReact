import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams(); // 👈 extracts route param

  return (
    <div>
      <h1>👤 User Page</h1>
      <p>User ID from URL: <b>{id}</b></p>
    </div>
  );
}

export default User;
