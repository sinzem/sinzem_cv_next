import type {  Viewport } from "next";

import "./styles/globals.css";

import { actayReg, actayWide } from "./styles/fonts";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${actayReg.variable} ${actayWide.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
