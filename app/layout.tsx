import type { Metadata } from "next";
import { Space_Grotesk, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import Breadcrumbs from "./components/Breadcrumbs";
import SiteFooter from "./components/SiteFooter";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Trine Engineering Private Limited",
  description: "Engineering-led solutions for modern industry."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${sourceSerif.variable}`}>
      <body>
        <div className="page">
          <SiteHeader />
          <Breadcrumbs />
          <main className="main-content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
