"use client"

import React from 'react'

const filterValues = [
  {
    
    value: "Dün"
  },
  {
    
    value: "Bugün"
  },
  {
    
    value: "Yarın"
  },
  {
    
    value: "Bu Hafta"
  },
  {
    
    value: "Bu Ay"
  },
  
]


const FilterButtons = () => {
  return (
    <div className='h-[48px] w-full flex justify-between overflow-hidden '>
       <div className='w-full h-[35.91px] md:h-[48px] flex justify-between gap-4 overflow-hidden'> 
            <button className='rounded-[11.35px] text-[14px] border-parity-item-gray border  w-[98.23px] md:w-[116.6px] flex  justify-center items-center'>TR</button>
           
            {
              filterValues.map((item, i) => (
                
                <button
                  key={i}
                  className='rounded-[11.35px] text-[14px] border-parity-item-gray border w-[116.6px] flex  overflow-hidden justify-center items-center'
                >
                  {item.value}
                </button>
                
              ))
            }
           
       </div>
        
    </div>
  )
}

export default FilterButtons