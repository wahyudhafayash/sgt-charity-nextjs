import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Innovative Solution For Animals",
  description: "Universities in Indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
