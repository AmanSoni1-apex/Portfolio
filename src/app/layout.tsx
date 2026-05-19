import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aman Soni — AI Systems Engineer & Technical PM",
  description:
    "Portfolio of Aman Soni — BCA Batch Topper, AI Systems Engineer, and Technical Product Manager. Shipped production-ready FastAPI systems, RAG pipelines, and full-stack MVPs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-screen bg-[#0B0F19] text-[#F3F4F6] selection:bg-[#06B6D4] selection:text-black flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}