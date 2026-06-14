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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
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
