import React from 'react'
import SearchBar from '../components/searchBar'
import FilterButtons from '../components/filterButtons'
import CalenderTable from '../components/calenderTable'
import News from '../components/news'

const Takvim = () => {
  return (
    <div className='w-full md:w-[1200px] flex flex-col md:flex-row mx-auto justify-between gap-6 px-2 md:px-0 '>
      <div className='flex flex-col gap-6 w-full md:w-[753px] mt-4'>
        <SearchBar/>
        <FilterButtons/>
        <CalenderTable/>
      </div>
      <div className='flex flex-col gap-6 w-full md:w-[390px]  '>
        <News/>
        <div className='w-[300px] h-[600px] bg-android-card/25 mx-auto text-center'>advert</div>
      </div>
    </div>
  )
}

export default Takvim