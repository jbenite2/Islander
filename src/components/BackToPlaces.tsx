"use client";

import { useRouter } from "next/navigation";

export default function BackToPlaces() {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }

    router.replace("/places");
  };

  return (
    <button type="button" className="post-back" onClick={handleBack}>
      ← Back to places
    </button>
  );
}
