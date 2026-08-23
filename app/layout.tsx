import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mkkkz.github.io"),
  title: "Miguel Inácio — Developer",
  description:
    "Miguel Inácio, desenvolvedor full stack. Desenvolvo sites, aplicações web e sistemas completos, do front-end ao back-end. Belo Horizonte, MG.",
  keywords: [
    "Miguel Inácio",
    "desenvolvedor",
    "full stack",
    "desenvolvimento web",
    "sites",
    "aplicações web",
    "Belo Horizonte",
  ],
  authors: [{ name: "Miguel Inácio" }],
  creator: "Miguel Inácio",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Miguel Inácio",
    title: "Miguel Inácio — Developer",
    description:
      "Desenvolvo sites, aplicações web e sistemas completos, do front-end ao back-end.",
    url: "https://mkkkz.github.io/",
  },
  twitter: {
    card: "summary",
    title: "Miguel Inácio — Developer",
    description:
      "Desenvolvo sites, aplicações web e sistemas completos, do front-end ao back-end.",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/assets/icons/favicon.jpg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}