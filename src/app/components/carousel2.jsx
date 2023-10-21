import React from 'react'
import Image from 'next/image'

const Carusel = ({datas}) => {
    useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third])
    
  return (
    <div className="relative border w-full  h-[190px] md:h-[420px] ">
        {
            datas.map((item,index) =>(
                <div key={index} className='w-full h-full'>
                    <Image src={item.index}></Image>
                </div>
            ))

        }
        {
            datas.map((item,index) =>(
                <div key={index} className='w-full h-full'>
                    <button className={`bg w-2 h-2 rounded-xl bg-[#15141F40] ${isSelected === true ? "w-8 bg-blue-btn" : null }`} isSelected={false}/>
                </div> 
            ))
        }
    </div>
  )
}

export default Carusel