import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    vorname: "",
    nachname: "",
    adresse: "",
    email: "",
    betrag: "",
  });
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      const data = await res.json();
      setPw(data.password);
    } else {
      setError("Fehler bei der Registrierung. E-Mail eventuell schon vergeben?");
    }
  }

  return (
    <div className="container">
      <h1>Registrieren</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Vorname"
          value={form.vorname}
          onChange={e => setForm({...form, vorname: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="Nachname"
          value={form.nachname}
          onChange={e => setForm({...form, nachname: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="Adresse"
          value={form.adresse}
          onChange={e => setForm({...form, adresse: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="E-Mail"
          value={form.email}
          onChange={e => setForm({...form, email: e.target.value})}
          required
        />
        <input
          type="number"
          placeholder="Betrag pro Höhenmeter (Rappen)"
          value={form.betrag}
          onChange={e => setForm({...form, betrag: e.target.value})}
          required
        />
        <button type="submit">Registrieren</button>
      </form>
      {pw && (
        <div>
          <p>Dein Passwort: <strong>{pw}</strong></p>
          <p>Bitte notiere es dir für den Login!</p>
        </div>
      )}
      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  );
}
