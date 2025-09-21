import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Fascinate_Inline } from "next/font/google";

const fascinate = Fascinate_Inline({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fascinate",
});

export const metadata = {
  title: "My Portfolio",
  description: "Mairéad O'Dwyer",
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fascinate.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
