import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lambdabees.com"),
  title: {
    default: "Lambdabees | Intelligent Software Engineering",
    template: "%s | Lambdabees",
  },
  description: company.description,
  keywords: [
    "AI development",
    "custom software engineering",
    "web application development",
    "mobile app development",
    "workflow automation",
    "agentic AI",
  ],
  icons: { icon: "/lambdabees-emblem.png" },
  openGraph: {
    title: "Lambdabees | Intelligent Software Engineering",
    description: company.description,
    url: "https://lambdabees.com",
    siteName: "Lambdabees",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
