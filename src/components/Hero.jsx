import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <>
    <div className= " hero_img flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-[#0a153599] bg-[url(/src/assets/hero.png)] bg-no-repeat bg-cover bg-center h-screen">
      <p className="bg-[#384ceb1c] px-3 5 py-1 rounded-full mt-20">Dónde puedo conseguirlo</p>
      <h1 className="font-playfair text-2xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
        Ipsum como su texto por defecto
      </h1>
      <p className="max-w-130 mt-2 text-sm md:text-base">
        No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original
      </p>
      {/*=====================form==========================*/}

       <form className='bg-[#16315f26] text-gray-950 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

            <div>
                <div className='flex items-center gap-2'>
                 <img src={assets.calenderIcon} alt="calenderIcon" className="h-4 " />
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                <input list='destinations' id="destinationInput" type="text" className=" rounded border border-[oklch(0.26 0.09 265.92)] px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                     <img src={assets.calenderIcon} alt="calenderIcon" className="h-4" />
                    <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className=" rounded border border-[oklch(0.26 0.09 265.92)] px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                     <img src={assets.calenderIcon} alt="calenderIcon" className="h-4" />
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" className=" rounded border border-[oklch(0.26 0.09 265.92)] py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" rounded border border-[oklch(0.26 0.09 265.92)] px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
            </div>

            <button className='flex items-center justify-center gap-1 rounded-md bg-[#212b44bf] py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
               <img src={assets.searchIcon} alt="searchIcon" className="h-7" />
                <span>Search</span>
            </button>
        </form>
    </div>
    </>
  )
}

export default Hero