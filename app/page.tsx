import Navbar from "@/components/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import BackgroundText from "@/components/BackgroundText";
import FloatingArrow from "@/components/FloatingArrow";
import BackgroundDecor from "@/components/BackgroundDecor";
import Hero from "@/components/sections/Hero";

import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Packages from "@/components/sections/Packages";
import OrderForm from "@/components/sections/OrderForm";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
<main className="relative overflow-hidden">
  <BackgroundText />
  <BackgroundDecor />

  <Navbar />
  <ThemeSwitcher />
  <FloatingArrow />

  <Hero />

  <About />
  <Services />
  <Packages />
  <OrderForm />
  <Reviews />
  <Contact />
</main>
);
}