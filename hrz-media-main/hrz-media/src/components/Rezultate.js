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
  const [paragraf, setParagraf] = useState("În ultimii doi ani am strâns peste două milioane de urmăritori pe conturile clienților noștri.Cheia acestei reușite a fost o strategie originală pentru fiecare cont, înțelegerea audienței și a așteptărilor ei legate de platformăși crearea unui conținut video distractiv cu multă valoare educativă.");
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
            "Am realizat circa 2200 de TikTok-uri ce au strâns peste 500 milioane de vizualizări pe conturile clienților noștri într-un an de zile. Majoritatea clipurilor realizate de noi pe TikTok le găsești pe #BRANDSTAGE unde avem peste 500 milioane de vizualizări.",
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
            "În ultimii doi ani am strâns peste două milioane de urmăritori pe conturile clienților noștri.Cheia acestei reușite a fost o strategie originală pentru fiecare cont, înțelegerea audienței și a așteptărilor ei legate de platformăși crearea unui conținut video distractiv cu multă valoare educativă.",
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
            "Peste 24 milioane vizualizări",
            "Cel mai vizualizat TikTok realizat de noi a ajuns la peste 24 milioane vizualizări.A fost cel mai vizualizat TikTok din România timp de 2 săptămâni și a generat peste 20K de urmăritori. Clipul a devenit viral și in alte țări, cum ar fi: Germania, Italia, Franța, Brazilia, Ucraina și Turcia.",
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
            "Cea mai impresionantă creștere am avut-o cu contul @dr.alexandra.mircea cu care am reușit să fim nr 1 în trending timp de 2 săptămâni cu 3 clipuri diferite. Astfel am crescut de la 300K de urmăritori la 400K într-o singură lună.",
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
