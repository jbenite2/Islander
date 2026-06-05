import Link from "next/link";
import { PalmIcon } from "@/components/PalmDecor";

type IslanderLogoProps = {
  linked?: boolean;
  className?: string;
};

export default function IslanderLogo({ linked = true, className = "" }: IslanderLogoProps) {
  const logo = (
    <span className={`islander-logo ${className}`.trim()}>
      <span className="islander-logo-palm">
        <PalmIcon />
      </span>
      <span className="islander-logo-main">Islander</span>
      <span className="islander-logo-accent">PR</span>
    </span>
  );

  if (linked) {
    return (
      <Link href="/places" className="islander-logo-link">
        {logo}
      </Link>
    );
  }

  return logo;
}
