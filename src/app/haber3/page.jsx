import React from 'react'
import News from '../components/news'
import SidebarComment from '../components/sidebarComment'
import Carousel from '../components/carousel'
import News3Table from '../components/news3Table'
import SocialNews from '../components/socialNewsTable'

const Haber3 = () => {
  return (
    <>
    <div className='w-full md:w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-8 mb-16'>
        <div className='w-full md:w-[753px] flex flex-1 flex-col  gap-6'>
            <Carousel/>
            <News3Table/>
        </div>
        <div className='flex flex-col gap-6 w-[384px] mx-auto'>
            <News/>
            <div className='w-[300px] h-[250px] bg-[#15141F40] text-center mx-auto'>advert</div>
            <SidebarComment/>
            <div className='w-[300px] h-[600px] bg-[#15141F40] text-center mx-auto'>advert</div>
        </div>
    </div>
    <div className='mb-16'>
    <SocialNews/>
    </div>
    </>
  )
}

export default Haber3