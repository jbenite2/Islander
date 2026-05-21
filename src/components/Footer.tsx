import Link from "next/link";

export default function Footer() {
  return (
    <footer className="guide-footer">
      <p className="guide-footer-logo">DelMonte</p>
      <div className="guide-footer-links">
        <Link href="/">DelMonte</Link>
        <Link href="/places">Places</Link>
        <a href="mailto:delmonteconcierge@gmail.com">delmonteconcierge@gmail.com</a>
      </div>
    </footer>
  );
}
