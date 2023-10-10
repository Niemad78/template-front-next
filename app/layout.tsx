import "./globals.css";
import type { Metadata } from "next";
import { Andika } from "next/font/google";

const andika = Andika({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Template front next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/logoDwM.png" />
      </head>
      <body className={andika.className}>{children}</body>
    </html>
  );
}
