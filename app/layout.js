import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Esra Ayaz",
  description: "Web Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
