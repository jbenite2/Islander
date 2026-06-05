"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { showDelMonte } from "@/lib/features";
import IslanderLogo from "@/components/IslanderLogo";

function isPlacesSection(pathname: string) {
  return (
    pathname === "/places" ||
    pathname.startsWith("/places/") ||
    pathname.startsWith("/posts")
  );
}

export default function Header() {
  const pathname = usePathname();
  const onPlaces = isPlacesSection(pathname);

  return (
    <header className="guide-header">
      <div className="guide-header-inner">
        {showDelMonte ? (
          <Link href="/" className="guide-logo">
            DelMonte
          </Link>
        ) : (
          <IslanderLogo />
        )}
        {showDelMonte && (
          <div className="guide-header-actions">
            {!onPlaces && (
              <Link href="/places" className="guide-tab">
                Places
              </Link>
            )}
            <a href="/#contact" className="guide-header-cta">
              Book Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
