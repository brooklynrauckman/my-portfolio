import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brooklyn Rauckman - Full Stack Engineer",
  description:
    "Full Stack Engineer passionate about bringing ideas to life through code",
  metadataBase: new URL("https://www.brooklynrauckman.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Brooklyn Rauckman - Full Stack Engineer",
    description:
      "Full Stack Engineer passionate about bringing ideas to life through code",
    url: "https://www.brooklynrauckman.com",
    siteName: "Brooklyn Rauckman",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brooklyn Rauckman - Full Stack Engineer",
    description:
      "Full Stack Engineer passionate about bringing ideas to life through code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
