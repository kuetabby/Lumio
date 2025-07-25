import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumio AI",
  description:
    "Build faster, think clearer with AI that stays out of your way.",
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
