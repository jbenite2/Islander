"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PalmIcon } from "@/components/PalmDecor";

type IslanderLogoProps = {
  linked?: boolean;
  className?: string;
};

export default function IslanderLogo({ linked = true, className = "" }: IslanderLogoProps) {
  const pathname = usePathname();

  const logo = (
    <span className={`islander-logo ${className}`.trim()}>
      <span className="islander-logo-palm">
        <PalmIcon />
      </span>
      <span className="islander-logo-main">Islander</span>
      <span className="islander-logo-accent">PR</span>
    </span>
  );

  if (linked && pathname !== "/places") {
    return (
      <Link href="/places" className="islander-logo-link">
        {logo}
      </Link>
    );
  }

  return <span className="islander-logo-link">{logo}</span>;
}
