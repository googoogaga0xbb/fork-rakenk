"use client"

import {useUser} from '../context/store'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../../public/logo.png";
import BurgMenu from "../../../public/burgermenu.svg";
import MobileMenu from './mobileMenu';

const Header = () => {

    const {user,updateUser} = useUser();

    const handleClick = () => {
        updateUser(!user);
    };
  return (
    
    <div className='w-full md:w-[1200px] mx-auto flex justify-between  py-2 md:py-6'>
        <div className='flex flex-shrink-0 scale-[0.65] md:scale-100'>
            <Image src={Logo} width={158} height={50.79}/>
        </div>
        <div className='hidden md:inline-block py-2 w-[375px] h-[50px] border'>
            advert
        </div>
        <div className=' gap-12 hidden md:flex '>
            <Link href={'/'} className='hover:underline duration-300 hover:decoration-blue-btn hover:decoration-4 hover:leading-4 '>Anasayfa</Link>
            <Link href={'/takvim'} className='hover:underline duration-300 hover:decoration-blue-btn hover:decoration-4 hover:leading-4 '>Takvim</Link>
            <Link href={'/haber'} className='hover:underline duration-300 hover:decoration-blue-btn hover:decoration-4 hover:leading-4 '>Haber</Link>
            <Link href={'/sosyal'} className='hover:underline duration-300 hover:decoration-blue-btn hover:decoration-4 hover:leading-4 '>Sosyal</Link>
            <Link href={'/sinyal'} className='hover:underline duration-300 hover:decoration-blue-btn hover:decoration-4 hover:leading-4 '>Sinyal</Link>
        </div>
        <div className='flex m-2 md:hidden'>
            <Image src={BurgMenu}  className='cursor-pointer' onClick={handleClick}/>
        </div>
        <div className={`${user ? 'flex' : 'hidden'}` }>
        <MobileMenu/>
        </div>
    </div>
   
  )
}

export default Header