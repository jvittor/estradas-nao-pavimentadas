import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Container } from "@/components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TED - UFRB/DNIT",
  description: "Estradas Não Pavimentadas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <header>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <Navbar />
        </header>

        {children}
      </body>
      
    </html>
    
  );
}
