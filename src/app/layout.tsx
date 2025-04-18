import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Coffely - Digitale Kaffeestempel App",
  description: "Coffely - Tracke deinen Kaffeekonsum & sammle digitale Stempel bei deinem Lieblingscafé.",
  keywords: "kaffee app, digitale stempelkarte, kaffee tracker, kaffee belohnung, kundenbindung cafés",
  authors: [{ name: "Coffely Team", url: "https://coffely.app" }],
  icons: {
    icon: "/favicon.ico",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#B45309",
  appleWebApp: {
    title: "Coffely App",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title: "Coffely - Digitale Kaffeestempel App",
    description: "Tracke deinen Kaffeekonsum & sammle digitale Stempel bei deinem Lieblingscafé.",
    url: "https://coffely.app",
    siteName: "Coffely",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.className} ${manrope.variable} ${inter.variable} antialiased selection:bg-amber-200 selection:text-amber-900 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
