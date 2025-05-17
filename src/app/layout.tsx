import type {  Viewport } from "next";

import Settings from "@/components/Settings/Settings";

import { actayReg, actayWide } from "./styles/fonts";
import "./styles/globals.css";

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

    <html lang="en" suppressHydrationWarning>

        <head>
            {/* Скрипт для предотвращения мерцания с измененной цветовой темой при загрузке*/}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        (function() {
                            try {
                                const theme = localStorage.getItem('theme');
                                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                                    document.documentElement.classList.add('dark');
                                } else {
                                    document.documentElement.classList.remove('dark');
                                }
                            } catch (e) {}
                        })();
                    `,
                }}
            />
        </head>

        <body className={`${actayReg.variable} ${actayWide.variable} antialiased`}>

            <Settings />

            {children}
            
        </body>

    </html>
  );
}
