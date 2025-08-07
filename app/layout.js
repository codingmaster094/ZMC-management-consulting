import "./globals.css";
import "./fonts.css";
import Header from "./components/Headr";
import Footer from "./components/Footer";
import TopButton from "./components/Top-Button";
import Cookie from "./components/Cookie";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "ZMZ- Z management consulting",
  description: "ZMZ- Z management consulting",
  robots: "index, follow",
  other: {
    "google-site-verification": "SErok5b3yj9S9GK9eW-vkHEJql5R1yPR1VuHfstHR18",
  },
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
