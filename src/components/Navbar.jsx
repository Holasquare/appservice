import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: 10, background: "#111", color: "#fff" }}>
      <span>Cloud Dashboard</span>

      {user && (
        <button onClick={logout} style={{ float: "right" }}>
          Logout
        </button>
      )}
    </div>
  );
}
