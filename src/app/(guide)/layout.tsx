import { DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../guide.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function GuideLayout({
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
      <div className={`guide-site ${dmSans.className}`}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
