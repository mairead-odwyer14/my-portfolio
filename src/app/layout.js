import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Fascinate_Inline } from "next/font/google";
import { Audiowide } from "next/font/google";
import { Rubik } from "next/font/google";
import { Bitcount_Prop_Double_Ink } from "next/font/google";

const fascinate = Fascinate_Inline({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fascinate",
});

const bitcount = Bitcount_Prop_Double_Ink({
  weight: "400",
  subsets:["latin"],
  variable: "--font-bitcount",
});

const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik",
})

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
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
        className={`${geistSans.variable} ${geistMono.variable} ${fascinate.variable} ${audiowide.variable} ${rubik.variable} ${bitcount.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
