import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Fascinate_Inline } from "next/font/google";
import { Audiowide } from "next/font/google";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";


const fascinate = Fascinate_Inline({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fascinate",
});

const bitcount = localFont({
  src: [
    {
      path: "./fonts/BitcountPropDoubleInk-Variable.ttf",
      style: "normal",
      weight: "100 900",
    },
  ],
  variable: "--font-bitcount",
  display: "swap",
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
        className={`${bitcount.variable} ${geistSans.variable} ${geistMono.variable} ${fascinate.variable} ${audiowide.variable} ${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
