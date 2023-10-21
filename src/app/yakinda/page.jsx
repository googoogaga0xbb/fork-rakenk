import React from 'react'
import Image from 'next/image'
import Photo from '../../../public/yakinda.svg'

const Yakinda = () => {
  return (
    <div className='flex justify-center items-center h-[75vh]'>
        <div>
        <Image  src={Photo} width={400} height={400}/>
        <h1 className='text-center text-[50px] font-bold text-[#052C52] '>Çok Yakında</h1>
        </div>
    </div>
  )
}

export default Yakinda