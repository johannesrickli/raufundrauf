import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Rauf und Rauf – Spendenaktion</h1>
      <p>
        Mit dem Fahrrad durch den Balkan – pro Höhenmeter kannst du spenden und die Tour live verfolgen!
      </p>
      <div style={{marginTop: "32px"}}>
        <Link href="/register"><button>Registrieren</button></Link>
        <Link href="/login"><button style={{marginLeft:"16px"}}>Login</button></Link>
      </div>
    </div>
  );
}