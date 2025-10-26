import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Innovate with Rakibul",
  description: "AI-powered portfolio and project showcase by Rakibul",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0F172A] text-white`}>
        {children}
      </body>
    </html>
  );
}
