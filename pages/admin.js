import { useEffect, useState } from "react";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [exportUrl, setExportUrl] = useState("");

  useEffect(() => {
    fetch("/api/spender").then(res => res.json()).then(setUsers);
  }, []);

  async function exportCSV() {
    const res = await fetch("/api/export");
    if (res.ok) {
      const blob = await res.blob();
      setExportUrl(URL.createObjectURL(blob));
    } else {
      setError("Export fehlgeschlagen");
    }
  }

  return (
    <div className="container">
      <h1>Admin – Spenderverwaltung</h1>
      <button onClick={exportCSV}>CSV Export</button>
      {exportUrl && (
        <a href={exportUrl} download="spender.csv" style={{marginLeft:"16px"}}>CSV herunterladen</a>
      )}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Adresse</th>
            <th>E-Mail</th>
            <th>Betrag/HM (Rp)</th>
            <th>Gesamt (CHF)</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.vorname} {user.nachname}</td>
              <td>{user.adresse}</td>
              <td>{user.email}</td>
              <td>{user.betragProHM}</td>
              <td>{((user.betragProHM * user.gesamtHoehenmeter)/100).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  );
}
