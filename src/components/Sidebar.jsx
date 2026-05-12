import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{ width: 200, padding: 20, background: "#f4f4f4" }}>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
      </ul>
    </div>
  );
}
