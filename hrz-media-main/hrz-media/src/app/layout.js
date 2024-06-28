import { Inter } from "next/font/google";
import "./globals.css";
import Header2 from '../components/Header2.js'
import Footer from '../components/Footer.js'
import { OpenGraphImage } from '../assets/allviewed.jpg'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  openGraph: 
    OpenGraphImage,
};

export default function RootLayout({ children }) {
   console.log("social media marketing, marketing pe rețelele sociale, digital marketing, marketing digital, content creation, creare de conținut, brand awareness, conștientizarea brandului, social media strategy, strategie de social media, online presence, prezență online, social media campaigns, campanii pe rețelele sociale, influencer marketing, marketing cu influenceri, engagement rate, rata de angajament, social media analytics, analize de social media, community management, managementul comunității, social media advertising, publicitate pe rețelele sociale, audience targeting, targetarea audienței, social media growth, creșterea pe social media, paid social media, social media plătită, organic reach, acoperire organică, social media tools, unelte pentru social media, social media trends, tendințe pe social media, content marketing, marketing de conținut, social media optimization, optimizarea pe social media, social media audit, audit de social media, social media consulting, consultanță de social media, social media management, managementul rețelelor sociale, social media training, instruire pentru social media, social media reporting, raportare social media, video marketing, marketing video, social media graphics, grafică pentru social media, social media posts, postări pe social media, social media branding, branding pe social media, social media engagement, angajament pe social media");
  console.log("social media promotions, promoții pe social media, cross-platform marketing, marketing cross-platformă, social media strategy development, dezvoltarea strategiei de social media, customer engagement, angajament cu clienții, user-generated content, conținut generat de utilizatori, social media reach, acoperire pe social media, social media ROI, ROI pe social media, social media budget, buget pentru social media, social media monitoring, monitorizare social media, social media crisis management, managementul crizei pe social media, hashtag strategy, strategie de hashtag-uri, social media insights, perspective asupra social media, social media best practices, cele mai bune practici pe social media, real-time marketing, marketing în timp real, social media innovation, inovație pe social media, viral marketing, marketing viral, follower growth, creșterea numărului de urmăritori, social media outreach, outreach pe social media, social media consultancy, consultanță pe social media, social media trends analysis, analiza tendințelor pe social media, website development, dezvoltare site-uri web, SEO services, servicii SEO, on-page SEO, SEO on-page, off-page SEO, SEO off-page, website optimization, optimizarea site-urilor web, keyword research, cercetare de cuvinte cheie, link building, construire de link-uri, technical SEO, SEO tehnic, website analytics, analize de site-uri web, website performance, performanța site-ului");
  return (
    <html lang="en">
      <body className="bg-black">
        <Header2/>
        {children}
        <Footer/>
        </body>
        
    </html>
  );
}
