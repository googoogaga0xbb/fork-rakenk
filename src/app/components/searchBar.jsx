"use client"
import SearchIcon from '../../../public/Search.svg'
import ButtonIcon from '../../../public/searchBtn.svg'
import React from 'react'
import Image from 'next/image'


const SearchBar = () => {
  return (
    <div className='relative h-12 flex justify-between items-center gap-4 md:gap-4 w-full font-md'>
        <Image src={SearchIcon} width={24} height={24} className='absolute top-3 left-10 md:left-[28%] scale-75 md:scale-100'/>
        <input type='text' placeholder='Bir Pariteyi Arayın' className='flex-auto md:w-3/5 border rounded-[11.35px] h-full text-[14px] placeholder-text text-center'/>
        <button className=' flex-1  bg-blue-btn text-white h-full rounded-[11.35px] flex justify-center items-center gap-2'>
            <Image src={ButtonIcon} width={24} height={24}/>
            Filtrele
            </button>
    </div>
  )
}

export default SearchBar