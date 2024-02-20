import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import ApolloProvied from "../../providers/ApolloProvied";
import Header from "../../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick and Morty App",
  description: "Rick and Morty demo app by pfulara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ApolloProvied>
        <body className={`${inter.className} min-h-screen`}>
          <Header />
          <main className="flex flex-col items-start justify-between p-24">
            {children}
          </main>
        </body>
      </ApolloProvied>
    </html>
  );
}
