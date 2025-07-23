import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumio Solana IDE - Empower Your Development",
  description: "Develop and deploy smart contracts on Solana effortlessly!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cyber-dark text-cyber-primary font-terminal antialiased">
        {children}
      </body>
    </html>
  );
}
