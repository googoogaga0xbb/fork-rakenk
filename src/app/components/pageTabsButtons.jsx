import React from 'react'
import LeftIcon from '../../../public/leftIcon.svg'
import RightIcon from '../../../public/rightIcon.svg'
import Image from 'next/image'

const PageTabs = () => {
  return (
    <div className='flex justify-between w-full'>
     <button className='border rounded-l w-[28px] h-[28px] flex justify-center items-center'> <Image src={LeftIcon}/> </button>
        <div className='flex gap-1 md:gap-3'>
            {/* bu kısmın dinamik oalrak geliyor olması lazım */}
            <button className='border w-[28px] text-android-card/25 rounded-l h-[28px] border-android-card/25 flex justify-center items-center'>1</button>
            <button className='border w-[28px] text-white rounded-l h-[28px] bg-blue-btn flex justify-center items-center'>2</button>
            <button className='border w-[28px] text-android-card/25 rounded-l h-[28px] border-android-card/25 flex justify-center items-center'>3</button>
            <button className='border w-[28px] text-android-card/25 rounded-l h-[28px] border-android-card/25 flex justify-center items-center'>4</button>
            <button className='border w-[28px] text-android-card/25 rounded-l h-[28px] border-android-card/25 flex justify-center items-center'>5</button>
        </div>
        <button className='border  w-[28px] h-[28px] flex justify-center rounded-l items-center'> <Image src={RightIcon}/> </button>
    </div>
  )
}

export default PageTabs