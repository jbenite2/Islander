import Link from "next/link";

export default function LandingNav() {
  return (
    <nav id="nav">
      <Link href="/" className="nav-logo">
        DelMonte
      </Link>
      <div className="nav-right">
        <Link href="/places" className="nav-link">
          Places
        </Link>
        <a href="#contact" className="nav-cta">
          Book Now
        </a>
      </div>
    </nav>
  );
}
