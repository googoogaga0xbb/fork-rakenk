import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SidebarBigNews = ({img,content,source,publisDate,title,link ="/home"}) => {
  return (
    <div className='flex flex-col gap-2'>
        <div className='flex gap-1 '>
            <Image src={img}  width={90} height={95}/>
            <div className='flex flex-col gap-1'>
                <h3 className='text-[12px] max-w-[20ch] text-text font-bold'>{title}</h3>
                <p className='text-[10px]'>{content}</p>
            </div>
        </div>
        <div className='flex justify-between'>
            <span className='text-[10px]'>{source} - {publisDate}</span>
            <Link href={link} className='font-md text-[10px] text-blue-btn'> Devamını Gör...</Link>
        </div>
    </div>
  )
}

export default SidebarBigNews