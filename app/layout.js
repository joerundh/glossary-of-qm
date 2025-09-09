import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageLayout from "./components/PageLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Glossary of quantum mechanics",
  description: "The title says it all",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PageLayout>
          {
            children
          }
        </PageLayout>
      </body>
    </html>
  );
}
