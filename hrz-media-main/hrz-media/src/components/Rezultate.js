"use client"
import { useState } from 'react';
import RezultateShowcase from './RezultateShowcase';
import Titlu from './Titlu';
import Image1 from '../assets/allviewed.jpg';
import Image3 from '../assets/mostviewed.jpg';
import Image4 from '../assets/mostfollowers.jpg';
import Image2 from '../assets/followeriadusi.jpg';
import { TbSquareNumber1, TbSquareNumber2, TbSquareNumber3, TbSquareNumber4 } from "react-icons/tb";

const Rezultate = () => {
  const [title, setTitle] = useState("Peste 500 milioane de vizualizări pe conturile clienților noștri");
  const [paragraf, setParagraf] = useState("Am creat TikTok-uri care au acumulat peste 500 de milioane de vizualizări pe conturile clienților noștri. Acest succes remarcabil demonstrează expertiza noastră în generarea de conținut viral, captarea interesului publicului și amplificarea vizibilității brandurilor. Colaborând cu noi, veți beneficia de o strategie de marketing pe social media personalizată, adaptată nevoilor specifice ale afacerii dumneavoastră, pentru a atinge și depăși obiectivele de creștere și implicare.");
  const [image, setImage] = useState(Image1);

  const handleClick = (title, paragraf, image, buttonId) => {
    setTitle(title);
    setParagraf(paragraf);
    setImage(image);


    document.getElementById('buton1').style.backgroundColor = "transparent";
    document.getElementById('buton2').style.backgroundColor = "transparent";
    document.getElementById('buton3').style.backgroundColor = "transparent";
    document.getElementById('buton4').style.backgroundColor = "transparent";


    document.getElementById(buttonId).style.backgroundColor = "rgb(126 34 206)";
  };

  return (
    <div className='w-[90%] max-w-[1250px] mx-auto pt-32 pb-32 lg:pb-16 lg:pt-16'>
      <div className='mb-16'>
        <Titlu scris="Rezultatele Noastre" />
      </div>

      <div className='flex flex-row gap-8 xs:gap-0 justify-between text-white pt-10'>
        <div
          id="buton1"
          onClick={() => handleClick(
            "Peste 500 milioane de vizualizări pe conturile clienților noștri",
            "Am creat TikTok-uri care au acumulat peste 500 de milioane de vizualizări pe conturile clienților noștri. Acest succes remarcabil demonstrează expertiza noastră în generarea de conținut viral, captarea interesului publicului și amplificarea vizibilității brandurilor. Colaborând cu noi, veți beneficia de o strategie de marketing pe social media personalizată, adaptată nevoilor specifice ale afacerii dumneavoastră, pentru a atinge și depăși obiectivele de creștere și implicare.",
            Image1,
            'buton1'
          )}
          className='border-white border-solid border-2 p-6 btnRezultate bg-purple-700'
        >
          <TbSquareNumber1 size={35} className='lg:mx-auto iconita' />
          <p className='content-center'>HRZ Media</p>
        </div>

        <div
          id="buton2"
          onClick={() => handleClick(
            "Peste 2 milioane urmăritori",
            "De cand am inceput, am adăugat peste două milioane de urmăritori pe conturile clienților noștri. Secretul acestui succes constă în dezvoltarea unor strategii personalizate pentru fiecare cont, înțelegerea profundă a audienței și așteptărilor acesteia pe platformă, și crearea de conținut video captivant, care îmbină distracția cu valoarea educativă.",
            Image2,
            'buton2'
          )}
          className='border-white border-solid border-2 p-6 btnRezultate'
        >
          <TbSquareNumber2 className='lg:mx-auto iconita' size={35} />
          <p className='content-center'>Followers</p>
        </div>

        <div
          id="buton3"
          onClick={() => handleClick(
            "Peste 6 milioane vizualizări",
            "Cel mai vizualizat TikTok realizat de noi a ajuns la peste 6 milioane vizualizări, generând un engagement extraordinar și consolidând poziția brandului nostru client pe piață. Ne mândrim cu abilitatea noastră de a crea conținut viral care captează atenția și construiește relații autentice cu publicul țintă.",
            Image3,
            'buton3'
          )}
          className='border-white border-solid border-2 p-6 btnRezultate'
        >
          <TbSquareNumber3 className='lg:mx-auto iconita' size={35} />
          <p className='content-center'>Cel mai vizualizat</p>
        </div>

        <div
          id="buton4"
          onClick={() => handleClick(
            "Peste 100K urmăritori într-o singură lună",
            "Cea mai impresionantă creștere am avut-o cu contul @depurtat.ro unde am reusit sa aducem peste 100K urmaritori intr-un timp record in Romania.",
            Image4,
            'buton4'
          )}
          className='border-white border-solid border-2 p-6 btnRezultate'
        >
          <TbSquareNumber4 className='lg:mx-auto iconita' size={35} />
          <p className='content-center'>Crestere Rapida</p>
        </div>
      </div>
      <RezultateShowcase id="rezultate" titlu={title} paragraf={paragraf} imagine={image.src} />
    </div>
  );
};

export default Rezultate;
