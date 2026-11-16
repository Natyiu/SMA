import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Quote from "@/components/sections/Quote";
import Industries from "@/components/sections/Industries";
import Steps from "@/components/sections/Steps";
import BuyerSystem from "@/components/sections/BuyerSystem";
import Tutorial from "@/components/sections/Tutorial";
import Compare from "@/components/sections/Compare";
import Pricing from "@/components/sections/Pricing";
import Founder from "@/components/sections/Founder";
import Reviews from "@/components/sections/Reviews";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";
import Footer from "@/components/sections/Footer";
import PreviewTools from "@/components/PreviewTools";
import SiteScripts from "@/components/SiteScripts";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Quote />
      <Industries />
      <Steps />
      <BuyerSystem />
      <Tutorial />
      <Compare />
      <Pricing />
      <Founder />
      <Reviews />
      <Faq />
      <Cta />
      <Footer />
      <PreviewTools />
      <SiteScripts />
    </>
  );
}
