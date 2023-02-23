import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "../styles/carousel.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
