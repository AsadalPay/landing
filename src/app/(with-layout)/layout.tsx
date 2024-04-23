import "./globals.css";
import { Inter } from "next/font/google";
import AppContextProvider from "@/context";
import MobileHeader from "./(main)/components/MobileHeader/MobileHeader";
import Header from "./(main)/components/Header/Header";
import Footer from "./(main)/components/Footer/Footer";
import Modals from "./(main)/components/Modals/Modals";
import Head from "next/head";

export const metadata = {
  title: "Asadal Pay",
  description: "Asadal pay app",
};

const inter = Inter({ subsets: ["cyrillic"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>
        <AppContextProvider>
          <MobileHeader />
          <Header />
          {children}
          <Modals />
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
