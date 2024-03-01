import "./App.css";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import LocomotiveScroll from "locomotive-scroll";
export default function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen  text-white bg-zinc-900 overflow-hidden">
      <Navbar />
      <LandingPage />

      <div className="marquee">
        <Marquee />
      </div>

      <div className="about">
        <About />
      </div>

      <div className="eyes">
        <Eyes />
      </div>

      <div className="featured">
        <Featured />
      </div>

      <Cards />
    </div>
  );
}
