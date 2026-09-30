import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PATAKIAS ENERGY | Ενέργεια, φωτοβολταϊκά και κατασκευές",
  description:
    "Η PATAKIAS ENERGY δραστηριοποιείται στην παραγωγή ηλεκτρικής ενέργειας, στα φωτοβολταϊκά, στις ενεργειακές εγκαταστάσεις και στις κατασκευές.",
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#eaf1e8",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
