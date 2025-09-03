import { useEffect, useState } from "react";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [gesamtHoehenmeter, setGesamtHoehenmeter] = useState(0);
  const [betragProHM, setBetragProHM] = useState(0);

  useEffect(() => {
    // Fetch user profile
    fetch("/api/me").then(res => res.json()).then(setProfile);
    // Fetch Strava tracks (simuliert)
    fetch("/api/strava").then(res => res.json()).then(data => {
      setTracks(data.tracks);
      setGesamtHoehenmeter(data.totalElevation);
    });
    // Fetch user spend amount
    fetch("/api/me").then(res => res.json()).then(data => setBetragProHM(data.betragProHM));
  }, []);

  return (
    <div className="container">
      <h1>Willkommen {profile?.vorname}!</h1>
      <h2>Gesammelte Höhenmeter: {gesamtHoehenmeter}</h2>
      <h2>Dein Betrag pro HM: {betragProHM} Rappen</h2>
      <h2>
        Dein aktueller Spendenstand: <strong>{((gesamtHoehenmeter * betragProHM)/100).toFixed(2)} CHF</strong>
      </h2>
      <h3>Gefahrene Strecken:</h3>
      <table>
        <thead>
          <tr>
            <th>Datum</th>
            <th>Strecke</th>
            <th>Höhenmeter</th>
            <th>Distanz (km)</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map(track => (
            <tr key={track.id}>
              <td>{track.date}</td>
              <td>{track.name}</td>
              <td>{track.elevation}</td>
              <td>{(track.distance/1000).toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
