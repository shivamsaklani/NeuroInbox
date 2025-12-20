import type { Metadata } from "next";
import { Geist, Geist_Mono,Funnel_Sans,Syne_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ReduxProvider from "./ReduxProvider";

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-funnel",
});

const syneMono = Syne_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "NeuroInbox",
  description: "NeuroInbox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnelSans.variable} ${syneMono.variable} antialiased`}
      >
        
        <ClerkProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
