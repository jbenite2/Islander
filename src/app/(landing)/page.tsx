import { redirect } from "next/navigation";
import LandingPage from "@/components/landing/LandingPage";
import { showDelMonte } from "@/lib/features";

export default function HomePage() {
  if (!showDelMonte) {
    redirect("/places");
  }

  return <LandingPage />;
}
