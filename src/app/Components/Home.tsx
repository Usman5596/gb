import Image from 'next/image'
import React from 'react'
import Products from '../products/page'
import { ClassNames } from '@emotion/react'


export default function Home() {
  return (
    <>
    <div className=' bg-[url("/bgi.jpg")]'>
        <div className=' flex w-full'>
          <Image src={'/banner-001.jpg'} alt='' height={750} width={680}/>
          <Image src={'/banner-002.jpg'} alt='' height={750} width={680}/>
        </div>

        <div className=' flex w-full'>
          <Image src={'/banner-003.jpg'} alt='' height={750} width={680}/>
          <Image src={'/banner-05.jpg'} alt='' height={750} width={680}/>
        </div>

        <div className='py-[20px]'>
          <h1 className=' font-extrabold text-center text-2xl text-white justify-around w-[70%] m-auto shadow-3xl bg-gray-700 rounded-3xl p-[40px] pb-[80px]'>MANUFACTURERS & EXPORTERS OF PREMIUM QUALITY SPORTSWEAR & LEATHER SAFETY GLOVES & WEARS</h1>
        </div>

        <div className=' bg-black text-white text-center text-xl font-bold w-[45%] -mt-[80px] m-auto rounded-3xl py-5 px-5 shadow-2xl'>
          <h1>source.tgb@gmail.com</h1>
          <h1>+92 321 7146798</h1>
          <h1>The Green Brand Company</h1>
          <h1>Small Industial Estate, Sialkot - 51310 Pakistan</h1>
          <h1>www.tgb.com</h1>
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
        </div>
    </>
  )
}
