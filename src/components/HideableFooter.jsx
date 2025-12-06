"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

export default function HideableFooter() {
  const pathname = usePathname();
  const hideFooter = pathname === "/login";

  if (hideFooter) return null;
  return (
    <div className="rounded-t-3xl overflow-hidden bg-dashboard ">
      <Footer />
    </div>
  );
}
