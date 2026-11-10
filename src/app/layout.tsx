import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Tech Tweakers | Cloud infrastructure, private LLMs and agents";
const description =
  "Cloud infrastructure, language models on your own hardware, and agents you can trust. We build for our own needs and run it in production before it reaches yours.";

export const metadata: Metadata = {
  metadataBase: new URL("https://techtweakers.org"),
  title,
  description,
  openGraph: {
    type: "website",
    siteName: "Tech Tweakers",
    title,
    description,
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Tech Tweakers" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background font-sans text-foreground`}
      >
        <Header />
        <main className="flex-1">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
