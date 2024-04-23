import "../(with-layout)/globals.css";
import { Inter } from "next/font/google";

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
      <body className={inter.className}>
        <main>

          {children}
        </main>
      </body>
    </html>
  );
}
