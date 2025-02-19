"use client"
import "./globals.css";


import { Inter } from "next/font/google";
import { ThemesProviders } from "./providers";
import { Toaster } from "@/components/ui/toaster";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <Provider store={store}>
        <ThemesProviders>{children}</ThemesProviders>
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}
