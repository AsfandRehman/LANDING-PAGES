import "./globals.css";
import { Host_Grotesk } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// configure weights you need
const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // add/remove as needed
  variable: "--font-host-grotesk",
});

export const metadata = {
  title: "ZSIDEO",
  description: "Business Coaching Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    
      <body className={`${hostGrotesk.variable} font-sans`}>
         <Navbar/> {children}  <Footer/>
      </body>
    
    </html>
    
  );
}
