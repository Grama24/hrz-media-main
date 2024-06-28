'use client'
import React from 'react'
import ComponentPachete from './ComponentPachete'
import Titlu from './Titlu'
const Pachete = () => {
  return (
    <div className='h-auto  pt-16 mx-auto pachete'>
      <Titlu scris='Pachetele noastre'/>
      <div className='max-w-[1250px] flex flex-wrap justify-center content-evenly gap-8 mx-auto pb-16 pt-20'>
      <ComponentPachete pachet="CONSULTANȚĂ SOCIAL MEDIA" pret="200€/60 min" serviciu1="Tips and Tricks" serviciu2="Strategie cont" serviciu3="Tipuri de conținut" serviciu4="Recomandări echimpament" serviciu5="" serviciu6="" serviciu7="" culoare="#663aa9" buton="Află mai multe" url="/servicii" ></ComponentPachete>
      <ComponentPachete pachet="PACHET LIGHT" pret="1800€/lună" serviciu1="Strategie cont" serviciu2="Research" serviciu3="10 videoclipuri/lună" serviciu4="Editare video" serviciu5="Postare conținut video" serviciu6="Administrare TikTok/Instagram" serviciu7="2-4 zile filmare/lună" culoare="#413750" buton="Află mai multe" url="/servicii" ></ComponentPachete>
      <ComponentPachete pachet="PACHET FULL" pret="2350€/lună" serviciu1="Pachet light" serviciu2="+" serviciu3="Creeare conținut video" serviciu4="20-25 videoclipuri lunar" serviciu5="3-5 zile de filmare pe lună" serviciu6="" serviciu7="" culoare="#663aa9" buton="Află mai multe" url="/servicii" ></ComponentPachete>
      <ComponentPachete pachet="IDEI TIKTOK/INSTAGRAM " pret="300€/lună" serviciu1="10 idei/lună" serviciu2="Listă personalizată pentru nișa ta" serviciu3="Trenduri TikTok/Instagram" serviciu4="" serviciu5="" serviciu6="" serviciu7="" culoare="#663aa9" buton="Află mai multe" url="/servicii" ></ComponentPachete>
      <ComponentPachete pachet="SEO" pret="Cere o ofertă" serviciu1="Pentru oferte personalizate de SEO, contactați-ne pe email: contact@hrz-media-consulting.ro" serviciu2="" serviciu3="" serviciu4="" serviciu5="" culoare="#413750" buton="Contact" url="/contact" ></ComponentPachete>
      <ComponentPachete pachet="WEBSITE" pret="Cere o ofertă" serviciu1="Pentru oferte personalizate de creare WEBSITE, contactați-ne pe email: contact@hrz-media-consulting.ro" serviciu2="" serviciu3="" serviciu4="" serviciu5="" culoare="#663aa9" buton="Contact" url="/contact" ></ComponentPachete>
      </div>
    </div>
  )
}

export default Pachete
