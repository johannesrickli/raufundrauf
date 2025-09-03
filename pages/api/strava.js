export default async function handler(req, res) {
  // Dummy tracks
  res.status(200).json({
    tracks: [
      { id: 1, date: "2025-09-01", name: "Uetliberg", elevation: 450, distance: 15000 },
      { id: 2, date: "2025-09-02", name: "Pfannenstiel", elevation: 300, distance: 10000 },
    ],
    totalElevation: 750
  });
}