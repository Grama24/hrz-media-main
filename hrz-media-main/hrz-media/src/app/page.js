
import { OpenGraphImage } from '../assets/allviewed.jpg'
import DespreNoi from "@/components/DespreNoi";
import LandingPage from "@/components/LandingPage";
import Servicii from "@/components/Servicii";
import Contact from "../components/Contact";
import Pachete from "@/components/Pachete";
import Statistici from "@/components/Statistici";

export const metadata = {

  title: "HRZ MEDIA - Experți în Social Media Marketing",
  description: " Transformăm prezența ta online prin strategii inovatoare și personalizate de marketing digital pe TikTok și Instagram. Garantăm creșterea vizibilității și vânzărilor tale în peste 5 nișe diferite.",

};

export default function Home() {
 
  return (
  <div>
  <LandingPage/>
  <DespreNoi/>
  <Servicii/>
  <Pachete />
  <Contact/>
  </div>
  
  );
}
