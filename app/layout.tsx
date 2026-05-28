import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const heading = Oswald({
  subsets: ["latin"],
  variable: "--font-sans"
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Youth Flag Football Camp",
  description: "Reusable event microsite for youth flag football camps and showcases."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} bg-ink font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
