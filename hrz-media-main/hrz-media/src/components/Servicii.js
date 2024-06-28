import React from 'react'
import  Titlu from '../components/Titlu'
import ComponentServicii from './ComponentServicii'
import { FaTasks, FaUserShield, FaPhotoVideo, FaNetworkWired } from "react-icons/fa";
import { BsCameraReels } from "react-icons/bs";
import { IoGlobeOutline } from "react-icons/io5";
const Servicii = () => {
  return (
    <div className='servicii  pt-16 lg:pt-8 mx-auto' >
      <div className='pb-4'>
      <Titlu scris='Servicii'/>
      </div>
      
      <div className='w-[90%] max-w-[1250px] flex flex-wrap justify-center content-evenly gap-12 mx-auto pb-16 pt-20'>
      
      <ComponentServicii icon={<BsCameraReels size={30} className='mx-auto'/>}  titlu="PRODUCȚIE VIDEO" paragraf1="- Pregătim ideile înainte de filmare si le aprobam cu tine pentru a eficientiza timpul filmarilor" paragraf2="- Folosim echipament profesional, microfoane, lumini si absolut tot ce este necesar ca filmarile sa fie perfecte"/>
      <ComponentServicii icon={<FaUserShield size={30} className='mx-auto'/>} titlu="ADMINISTRARE CONTURI SOCIAL MEDIA" paragraf1="- Ne ocupăm de crearea conturilor" paragraf2="- Interacționăm cu publicul" paragraf3="- Postăm videoclipurile la cele mai bune ore în funcție de fiecare client si nișă"/>
      <ComponentServicii icon={<FaTasks size={30} className='mx-auto'/>}  titlu="CONSULTANȚĂ PENTRU BRAND-URI" paragraf1="- Ghid pentru cele mai eficiente strategii de marketing digital" paragraf2="- Actualizări regulate privind trendurile de pe social media" paragraf3="- Exemple de succese din experiența noastră" paragraf4="- Secrete și sfaturi pentru a înțelege complet cum funcționează platforma" />
      <ComponentServicii icon={<FaPhotoVideo size={30} className='mx-auto'/>} titlu="EDITARE VIDEO" paragraf1="- Editorii noștri vor crea videoclipuri captivante, folosind: sunete, imagini tip pop-up, subtritrări animate și colorizarea videoclipurilor"/>
      <ComponentServicii icon={<FaNetworkWired size={30} className='mx-auto'/>} titlu="SEO" paragraf1="- Serviciile noastre SEO te ajută ca site-ul tău să fie mai ușor de găsit în primele afișări" paragraf2="- Presupune îmbunătățirea percepției clientilor și a motoarelor de căutare asupra calității brand-ului și a siteului"/>
      <ComponentServicii icon={<IoGlobeOutline size={30} className='mx-auto'/>} titlu="WEBSITE" paragraf1="- Realizăm profesional website-uri pentru prezentare, magazine online, cataloage online și alte platforme digitale, atât pentru persoane fizice, cât și pentru companii."/>
     
   
      </div>
   
    </div>
  )
}

export default Servicii
