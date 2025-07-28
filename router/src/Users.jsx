import { Routes, Route, Outlet } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

function Users() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">👥 Users Page</h2>

      {/* Outlet renders the nested route */}
      <Routes>
        <Route index element={<UserList />} />
        <Route path=":id" element={<UserDetails />} />
      </Routes>

      <Outlet />
    </div>
  );
}

export default Users;
