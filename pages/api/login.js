export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    // Dummy check
    if (email === "test@exists.com" && password === "testpass") {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ error: "Login fehlgeschlagen" });
    }
  } else {
    res.status(405).end();
  }
}