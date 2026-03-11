import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import Chatbot from "@/components/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BM Estates - Estate Agents in Leicester | Buying, Selling & Letting",
  description:
    "BM Estates - Your trusted estate agency in Leicester. Specialising in property sales, lettings, and valuations. Over 20 years of experience in the Leicester property market.",
  keywords:
    "estate agents, Leicester, property, sales, lettings, valuations, BM Estates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <Chatbot />
      </body>
    </html>
  );
}
