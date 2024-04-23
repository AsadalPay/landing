import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Facts from "./components/Facts/Facts";
import FeaturesMore from "./components/FeaturesMore/Features";
import Carousel from "@/app/(with-layout)/(main)/components/Carousel/Carousel";
import PayMore from "./components/PayMore/PayMore";
import Connect from "./components/Connect/Connect";


export default function Main() {
  return (
    <main className="relative">
      <Hero />
      <Carousel />
      <Features />
      <Facts />
      <PayMore />
      <FeaturesMore />
      <Connect />
    </main>
  );
}
