import Link from "next/link";
import { showDelMonte } from "@/lib/features";
import IslanderLogo from "@/components/IslanderLogo";

export default function Footer() {
  return (
    <footer className="guide-footer">
      {showDelMonte ? (
        <>
          <p className="guide-footer-logo">DelMonte</p>
          <div className="guide-footer-links">
            <Link href="/">DelMonte</Link>
            <Link href="/places">Places</Link>
            <a href="mailto:delmonteconcierge@gmail.com">delmonteconcierge@gmail.com</a>
          </div>
        </>
      ) : (
        <div className="guide-footer-brand">
          <IslanderLogo linked={false} />
          <p className="guide-footer-tagline">Puerto Rico, decoded.</p>
        </div>
      )}
    </footer>
  );
}
