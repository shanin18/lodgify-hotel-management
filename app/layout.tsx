import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProviderComponent from "@/app/components/others/ProviderComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lodgify",
  description: "Hotel Management website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderComponent>
          {children}
        </ProviderComponent>
      </body>
    </html>
  );
}
