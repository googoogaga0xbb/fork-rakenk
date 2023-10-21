import React from 'react'
import SocialNews from '../components/socialNewsTable'
import FilterButtons from '../components/filterButtons'
import News from '../components/news'
import SidebarComment from '../components/sidebarComment'
import Advert from '../components/advert750x100'
import SocialTable from '../components/socailTable'
import PageTabs from '../components/pageTabsButtons'


const Sosyal = () => {
  return (
    <div >
      <SocialNews/>
      <div className='w-full md:w-[1200px] mx-auto flex flex-col md:flex-row gap-6 mt-12'>
        <div className=' w-full md:w-[753px] flex-shrink-0 flex flex-col px-2 md:px-0 gap-6  mx-auto'>
          <FilterButtons/>
          <SocialTable/>
          <PageTabs/>
        </div>
        <div className='flex flex-col gap-8  w-full mx-auto md:w-[390px] px-2 md:px-0'>
          <News/>
          <div className='w-[300px] h-[250px] mx-auto bg-android-card/25 '>advert</div>
          <SidebarComment/>
          <div className='w-[300px] h-[600px] mx-auto bg-android-card/25'>advert</div>
        </div>
      </div>
    </div>
  )
}

export default Sosyal