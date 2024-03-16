import type { Metadata } from "next";
import { Inter, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const noto = Noto_Serif_KR({
  weight: ["700", "600", "400"],
  subsets: ["latin"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "Golden Harvest | Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${noto.variable}`}>
      <body className={"bg-noise scrollbar"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
