import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MagicReview AI — AI Reputation Growth Platform",
  description: "Collect authentic feedback, assist review writing, respond faster, and grow your reputation with AI-powered QR and NFC experiences.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
