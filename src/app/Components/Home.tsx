import Image from 'next/image'
import React from 'react'
import Products from '../products/page'


export default function Home() {
  return (
    <>
        <div className=" bg-[url('/bg.jpg')] bg-cover py-[460px]"></div>

        <div className='py-[20px]'>
          <h1 className=' font-extrabold text-center text-2xl text-white justify-around w-[70%] m-auto shadow-3xl bg-black rounded-3xl p-[40px] pb-[80px]'>MANUFACTURERS & EXPORTERS OF PREMIUM QUALITY SPORTSWEAR & LEATHER SAFETY GLOVES & WEARS</h1>
        </div>

        <div>
          <Image src={'/tgb.jpg'} alt='tgb' width={200} height={200} className=' w-[40%] -mt-[80px] m-auto rounded-2xl ' />
        </div>
        
        <Products/>
       
        <div className=' flex gap-10 px-[50px] py-[10px] justify-center'>
          <div>
          <h1 className=' font-bold text-3xl text-center pb-1'>Denmark</h1>
          <Image src={'/dki.jpg'} alt='denmark' width={180} height={180} />
          </div>

          <div>
            <h1 className=' font-bold text-3xl text-center pb-1'>France</h1>
          <Image src={'/france.png'} alt='france' width={180} height={180} />
          </div>
            
            <div>
              <h1 className=' font-bold text-3xl text-center pb-1'>Spain</h1>
              <Image src={'/spain.png'} alt='spain' width={180} height={180} />
            </div>
            
            <div>
            <h1 className=' font-bold text-3xl text-center pb-1'>Neatherland</h1>
            <Image src={'/neatherland.png'} alt='nea' width={180} height={180} />
            </div>

            <div><h1 className=' font-bold text-3xl text-center pb-1'>UK</h1>
            <Image src={'/uni.webp'} alt='usa' width={180} height={180} />
            </div>

            <div><h1 className=' font-bold text-3xl text-center pb-1'>Canada</h1>
            <Image src={'/canad.avif'} alt='usa' width={180} height={180} />
            </div>

        </div>
    </>
  )
}
