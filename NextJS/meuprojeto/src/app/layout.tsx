import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";




export const metadata: Metadata = {
  title: "Meu site - aprendendo nextjsx",
  description: "site Catau",
  keywords: ['HTML', 'CSS', 'JavaScript', 'Programaçao'],
  openGraph:{
    images: ['']
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        
        {children}
      </body>
    </html>
  );
}
