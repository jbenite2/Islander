import type { Metadata } from "next";
import "./globals.css";
import { showDelMonte } from "@/lib/features";

export const metadata: Metadata = {
  title: showDelMonte
    ? "DelMonte Concierge — Puerto Rico, Your Way"
    : "Islander PR — Puerto Rico",
  description: showDelMonte
    ? "Private concierge for Airbnb guests who want to actually experience Puerto Rico"
    : "A local guide to the best spots in Puerto Rico",
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
