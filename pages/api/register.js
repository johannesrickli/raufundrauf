export default async function handler(req, res) {
  if (req.method === "POST") {
    // Dummy user DB simulation
    const { vorname, nachname, adresse, email, betrag } = req.body;
    // Simulate email uniqueness check
    if (email === "test@exists.com") {
      res.status(400).json({ error: "Email bereits vergeben" });
      return;
    }
    // Simulate password creation
    const password = Math.random().toString(36).slice(-8);
    // "Save" user (skipped)
    res.status(200).json({ password });
  } else {
    res.status(405).end();
  }
}