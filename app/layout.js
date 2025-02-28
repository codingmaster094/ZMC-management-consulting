import "./globals.css";
import "./fonts.css";
import Header from "./components/Headr";
import Footer from "./components/Footer";
import TopButton from "./components/Top-Button";
import Cookie from "./components/Cookie";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "ZMC Management Consulting",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
        {children}
        <SpeedInsights/>
        </main>
        <Footer />
        <TopButton/>
        <Cookie/>
      </body>
    </html>
  );
}
