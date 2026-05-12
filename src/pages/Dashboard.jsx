import { useEffect, useState } from "react";
import { fetchUsers } from "../api/client";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>

      <h3>Users from API:</h3>
      <ul>
        {users.slice(0, 5).map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
