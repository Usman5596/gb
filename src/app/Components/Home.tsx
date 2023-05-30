import Image from 'next/image'
import React from 'react'
import Products from '../products/page'
import About from '../about/page'



export default function Home() {
  return (
    <>
    <div className=' bg-[url("/bgi.jpg")] pb-4'>
        <div className=' flex w-full'>
          <Image src={'/banner-001.jpg'} alt='' height={750} width={680}/>
          <Image src={'/banner-002.jpg'} alt='' height={750} width={680}/>
        </div>

        <div className=' flex w-full'>
          <Image src={'/banner-003.jpg'} alt='' height={750} width={680}/>
          <Image src={'/banner-0005.jpg'} alt='' height={750} width={680}/>
        </div>

        <div className='py-[20px]'>
          <h1 className=' font-extrabold text-center text-2xl text-white justify-around w-[70%] m-auto shadow-3xl bg-gray-700 rounded-3xl p-[40px] pb-[80px]'>MANUFACTURERS & EXPORTERS OF PREMIUM QUALITY SPORTSWEAR & LEATHER SAFETY GLOVES & WEARS</h1>
        </div>

        <div className=' bg-black text-white text-center text-xl font-bold w-[45%] -mt-[80px] m-auto rounded-3xl py-5 px-5 shadow-2xl'>
          <h1>source.tgb@gmail.com</h1>
          <h1>+92 321 7146798</h1>
          <h1>The Green Brand Company</h1>
          <h1>Small Industial Estate, Sialkot - 51310 Pakistan</h1>
        </div>
        
        <Products/>

        <About/>

        <div className=' align-middle pt-[40px] pl-[50px] pb-4 underline text-fuchsia-950'>
          <h1 className=' font-extrabold text-3xl border-l-yellow-600 border-l-[6px] pl-[10px] text-black'>Customer Span Over</h1>
        </div>
       
        <div className=' flex gap-10 px-[50px] pb-[10px] justify-center'>
          <div>
          <h1 className=' font-bold text-2xl text-center  bg-black rounded-xl text-white'>Denmark</h1>
          <Image src={'/dki.jpg'} alt='denmark' width={180} height={180} className=' rounded-2xl py-2' />
          </div>

          <div>
            <h1 className=' font-bold text-2xl text-center bg-black rounded-xl text-white'>France</h1>
          <Image src={'/france.png'} alt='france' width={180} height={180} className=' rounded-2xl py-2' />
          </div>
            
            <div>
              <h1 className=' font-bold text-2xl text-center bg-black rounded-xl text-white'>Spain</h1>
              <Image src={'/spain.png'} alt='spain' width={180} height={180} className=' rounded-2xl py-2' />
            </div>
            
            <div>
            <h1 className=' font-bold text-2xl text-center bg-black rounded-xl text-white'>Neatherland</h1>
            <Image src={'/neatherland.png'} alt='nea' width={180} height={180} className=' rounded-2xl py-2' />
            </div>

            <div><h1 className=' font-bold text-2xl text-center bg-black rounded-xl text-white'>UK</h1>
            <Image src={'/uni.webp'} alt='usa' width={180} height={180} className=' rounded-2xl py-2' />
            </div>

            <div><h1 className=' font-bold text-2xl text-center bg-black rounded-xl text-white'>Canada</h1>
            <Image src={'/canad.avif'} alt='usa' width={180} height={180} className=' rounded-2xl py-2' />
            </div>
        </div>
        </div>
    </>
  )
}
