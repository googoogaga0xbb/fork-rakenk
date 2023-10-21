import React from 'react'
import Ellipse from '../../../public/ellipse.png'
import Phone from '../../../public/phoneScreen.svg'
import Ios from '../../../public/ios.svg'
import Google from '../../../public/googleBlack.svg'
import Image from 'next/image'
import Link from 'next/link'

const MobCard = () => {
  return (
    <div className='relative w-full h-[119.33px] bg-mob-bg rounded-[10px] z-[1] overflow-hidden'>
        <Image src={Ellipse} className='z-[2] '/>
        <h1 className='absolute text-[22.58px] text-white left-2 top-3 max-w-[12ch] leading-[24px]'> Kazananların Adresi Coinpara</h1>
        <div className='absolute w-[136.14px] h-[95.47px] rounded-t-[12px] bg-phone-bg bottom-0 right-4'>
            <Link href={'/'}><Image src={Phone} alt={'phone'}className='absolute bottom-5 left-[11px]'/></Link>
        </div>
        <Image src={Ios} width={80.41} height={27.73} className='absolute bottom-4 left-4 bg-white px-2 py-1 rounded-sm'/>
        <Image src={Google} width={80.41} height={27.73} className='absolute bottom-[17px] left-28  rounded-sm'/>
        
    </div>
  )
}

export default MobCard