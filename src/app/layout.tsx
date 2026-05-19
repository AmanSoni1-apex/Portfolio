import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aman Soni | Founder-Architect & AI Systems Engineer",
  description: "Portfolio of Aman Soni, BCA Batch Topper, AI Systems Engineer, and Technical Product Manager. Crowned Mr. Farewell and directed full-stack bootcamps of 170+ students.",
  openGraph: {
    title: "Aman Soni | Founder-Architect & AI Systems Engineer",
    description: "Crowned Mr. Farewell, BCA Batch Topper. Shipped Reflecta AI and BuildThis developer tools.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-[#0B0F19] text-[#F3F4F6] selection:bg-[#06B6D4] selection:text-black flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
