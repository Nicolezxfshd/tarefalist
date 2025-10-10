import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lista de Tarefas | Next.js 15",
  description:
    "Aplicação simples de listagem e adição de tarefas usando App Router, componentes e hooks.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Lista de Tarefas | Next.js 15",
    description:
      "Aplicação simples de listagem e adição de tarefas usando App Router, componentes e hooks.",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950`}
      >
        {children}
      </body>
    </html>
  );
}
