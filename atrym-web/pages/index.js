import React from 'react'
import Nav from '@/Components/Nav'
import Header from '@/Components/Haeder'
import CardsIndex from '@/Components/CardsIndex'
import CardsPopular from '@/Components/CardsPopular'



export default function index () {
  return (
    <main className="bg-scroll bg-[#b7a597]">
    
    <nav className='bg-[#e2d4c9]'>
      <Nav />
    </nav>
    
    <header className='bg-[#f5f2ef]'>
      <Header />
    </header>

    <section className="bg-[#b7a597] container p-6 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 md:gap-10">
      <CardsIndex
        cardImage="images/card1.jpeg"
        title="Perfumes a elección"
        description="Amplio catálogo para que elijas la esencia que más te represente. Las fragancias más solicitadas del mercado las podés encontrar acá." 
      />
      <CardsIndex 
        cardImage="images/card2.jpeg"
        title="Envíos a toda la provincia"
        description="Llegamos a todas partes de la pronvincia de Buenos Aires. Donde estés vos, está Atrym."
      />
      <CardsIndex 
      cardImage="images/card3.jpeg"
      title="Customizá tus perfumes"
      description="Las fragancias son ampliamente modificables. Podés pedir que sean tanto suaves como fuertes. La elección, es tuya."
      />
    </section>

    <section className='bg-[#e2d4c9] flex justify-center items-center p-20'>
        <div className='flex justify-between items-center w-full max-w'>
          
          <div className='flex flex-col justify-center text-center w-1/2 items-center'>
            <h2 className='text-black mb-4'>
              Regalá fragancias que impacten en los demás
            </h2>
            <p className='text-black'>
              Una fragancia que combina notas frescas y cálidas, ideal para cualquier ocasión. Un regalo inolvidable que cautiva los sentidos y deja una impresión duradera. Comparte un aroma único que habla de elegancia y sofisticación.
            </p>

            <div className='pt-6'>
            <div className='bg-[#a28b78] rounded-full w-32 h-18 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-150'>
            <p className='p-2'>
              Catlálogo Online
            </p>
            </div>
            </div>

          </div>

          <div className='flex justify-center'>
            <img src="images/perfume_fondo_c1.jpg" alt="Perfume" className='w-[850px] h-[550px] rounded-t-full z-0 border-solid border-pink-700 border-4' />
          </div>
        
        </div>
    </section>


    <section className="bg-[#b7a597] container p-6 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 md:gap-10">


    <CardsPopular 
    cardImage="images/onemillion.jpg"
    />

    <CardsPopular 
    cardImage="images/carolinaherrera.jpg"
    />

    <CardsPopular 
    cardImage="images/goldensecret.webp"
    />

    <CardsPopular 
    cardImage="images/goldensecret.webp"
    />


    </section>

    <section className='bg-red-300 flex-col grid-cols-1 justify-center text-center'>

      <div className='mt-5 pt-5 pb-20 rounded-t-full bg-slate-300'>
        <div>
          <h2> Comunicate con nuestro staff </h2>
          <p> Solicitá tus fragancias a través de nuestro WhatsApp. También podés encontrarnos en nuestro Instagram y Facebook. Hace click abajo, y comenzá tu apasionado viaje en las fragancias más frescas e intensas.</p>
        </div>
      </div>


    </section>

    </main>
  )
}