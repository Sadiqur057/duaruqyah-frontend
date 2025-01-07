
import "./globals.css";
import { inter } from "@/utils/fonts";

export const metadata= {
  title: "Dua & Ruqyah | All Duas"
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-body`}>
        {children}
      </body>
    </html>
  );
}
