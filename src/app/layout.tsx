import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import Navbar from "./_components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", ...inter }}>
        <TRPCReactProvider>
          <Navbar />
          <div className="absolute w-full h-16 justify-end flex text-white items-center px-8 font-mono">
            almost done
          </div>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
