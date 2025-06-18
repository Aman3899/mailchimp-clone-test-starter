import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { AlertBanner } from "@/components/alert-banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mailchimp Clone",
  description: "A front-end clone of Mailchimp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen flex-col">
            <AlertBanner />
            <div className="flex flex-1 overflow-hidden">
              <Sidebar />
              <div className="flex flex-1 flex-col">
                <Header />
                <main className="flex-1 overflow-auto">{children}</main>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
