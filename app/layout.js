import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Esra Ayaz | Portfolio",
  description: "Web Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${ovo.className} ${outfit.className} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
