
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-body`}>
        {children}
      </body>
    </html>
  );
}
