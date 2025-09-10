import type { Metadata } from "next";
import { Inter, Merriweather, Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientBody from "./client-body";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-alt",
});

export const metadata: Metadata = {
  title: "Alpha Healthcare - Premium Beauty & Wellness Products",
  description:
    "Discover curated healthcare, wellness, and beauty products. Natural ingredients, premium quality, and exclusive offers.",
  keywords: [
    "healthcare",
    "beauty",
    "wellness",
    "skincare",
    "organic",
    "supplements",
    "natural products",
    "sale",
  ],
  authors: [{ name: "Alpha Healthcare", url: "https://alphahealthcare.com" }],
  themeColor: "#65FF80", // Primary green for theme
  openGraph: {
    type: "website",
    title: "Alpha Healthcare - Premium Beauty & Wellness Products",
    description:
      "Discover curated healthcare, wellness, and beauty products. Natural ingredients, premium quality, and exclusive offers.",
    url: "https://alphahealthcare.com",
    siteName: "Alpha Healthcare",
    images: [
      {
        url: "https://alphahealthcare.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alpha Healthcare Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Healthcare - Premium Beauty & Wellness Products",
    description:
      "Discover curated healthcare, wellness, and beauty products. Natural ingredients, premium quality, and exclusive offers.",
    images: ["https://alphahealthcare.com/og-image.jpg"],
    creator: "@alphahealthcare",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${merriweather.variable}`}
      >
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
