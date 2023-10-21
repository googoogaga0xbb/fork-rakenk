import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SmallNewsCard = ({img,content,source,publisDate,title,link ="/home",provider}) => {
    return (
      <div className='flex flex-col gap-2'>
          <div className='flex gap-1 '>
              <Image src={img}  width={52} height={55}/>
              <div className='flex flex-col gap-1'>
                  <h3 className='text-[8px] font-bold text-blue-btn'>{provider}</h3>
                  <p className='text-[12px]'>{content}</p>
              </div>
          </div>
          <div className='flex justify-between'>
              <span className='text-[8px] font-md'>{source} - {publisDate}</span>
              <Link href={link} className='font-md text-[8px] text-blue-btn' > Devamını Gör...</Link>
          </div>
      </div>
    )
  }

export default SmallNewsCard