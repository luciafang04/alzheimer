import { Domine, Quicksand } from "next/font/google";
import "./globals.css";

export const domine = Domine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

export const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${quicksand.variable} ${domine.variable}`}>{children}</body>
    </html>
  );
}
