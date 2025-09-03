export default async function handler(req, res) {
  // Simulierter User
  res.status(200).json({
    vorname: "Max",
    nachname: "Muster",
    betragProHM: 5, // Rappen
    email: "test@exists.com"
  });
}