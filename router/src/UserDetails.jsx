import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  return <h3>📄 User Details for User ID: {id}</h3>;
}

export default UserDetails;
