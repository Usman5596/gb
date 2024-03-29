import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className=' flex align-middle gap-[60px] p-[40px] bg-gray-700 'id='contect'>
        <div className=' w-1/3'>
            <h1 className=' text-3xl font-bold border-l-yellow-600 border-l-[5px] pl-[8px] text-slate-200'>CONTACT INFORMATION</h1>
            <h1 className=' pt-[30px] font-bold text-slate-200'>ADDRESS:</h1>
            <p className=' text-sm flex font-semibold text-slate-200'>SMALL INDUSTRIAL ESTATE, SIALKOT - 51310 PAKISTAN.</p>
            <h1 className=' font-bold pt-[15px] text-slate-200'>PHONE:</h1>
            <p className=' text-sm font-semibold text-slate-200'>0092 - 321 - 7146798</p>
            <h1 className=' font-bold pt-[15px] text-slate-200'>EMAIL:</h1>
            <p className=' text-sm font-semibold flex gap-1 text-slate-200'>aysegul@aysgul.com</p>
            <p className=' text-sm font-semibold flex gap-1 text-slate-200'>order@aysgul.com</p>
            <p className=' text-sm font-semibold flex gap-1 text-slate-200'>sales@aysgul.com</p>
        </div>
        <div className=' w-1/3'>
        <h1 className='text-3xl font-bold border-l-yellow-600 border-l-[5px] pl-[8px] text-slate-200'>USEFUL LINKS</h1>
        <ul className="text-sm font-bold py-[30px]">
                <li className='py-[4px] hover:text-rose-600 text-slate-200'>
                    <Link href='/'>HOME</Link>
                </li>
                <li className=' py-[4px] hover:text-rose-600 text-slate-200'>
                    <Link href='/'>ABOUT</Link>
                </li>
                <li className=' py-[4px] hover:text-rose-600 text-slate-200'>
                    <Link href='./products'>PRODUCTS</Link>
                </li>
                <li className=' py-[4px] hover:text-rose-600 text-slate-200'>
                    <Link href='/'>COMMITMENT</Link>
                </li>
                <li className=' py-[4px] hover:text-rose-600 text-slate-200'>
                    <Link href='/'>CONTACT US</Link>
                </li>
            </ul>
        </div>
        <div className=' w-1/3'>
            <h1 className=' text-3xl font-bold border-l-yellow-600 border-l-[5px] pl-[8px] text-slate-200'>FOLLOW US</h1>
            <ul className= " font-extrabold py-[30px] flex gap-1 ">
                <li>
                    <Link href='/'><Image src={'/facebook.png'} alt='fb' width={35} height={35}/></Link>
                </li>
                <li>
                    <Link href='/'><Image src={'/linkedin.png'} alt='link' width={35} height={35}/></Link>
                </li>
                <li>
                    <Link href='/'><Image src={'/instagram.png'} alt='Inst' width={35} height={35}/></Link>
                </li>
                <li>
                    <Link href='/'><Image src={'/twitter.png'} alt='Twit' width={35} height={35}/></Link>
                </li>
                <li>
                    <Link href='/'><Image src={'/youtube.png'} alt='You' width={35} height={35}/></Link>
                </li>
            </ul>
            <p className=' pr-10 font-semibold text-slate-200'>AGI Co. is designed to be professional and dynamic. We aim to keep RND ahead and become professional to provide best output for our customers.</p>
        </div>
    </div>
  )
}
