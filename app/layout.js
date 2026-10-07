import { Fraunces, Nunito } from "next/font/google";
import { site } from "@/content";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-display" });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--font-body" });

export const metadata = {
  title: site.googleTitel,
  description: site.googleBeskrivning,
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv" className={`${fraunces.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
