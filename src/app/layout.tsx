import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DelMonte Concierge — Puerto Rico, Your Way",
  description:
    "Private concierge for Airbnb guests who want to actually experience Puerto Rico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
