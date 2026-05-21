import { DM_Sans } from "next/font/google";
import "../landing.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-sans",
});

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;500;600;700&family=DM+Sans:wght@300;400&display=swap"
        rel="stylesheet"
      />
      <div className={`landing-site ${dmSans.className}`}>{children}</div>
    </>
  );
}
