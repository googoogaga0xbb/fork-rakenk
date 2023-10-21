import React from "react";
import Carousel from "../components/carousel.jsx";
import SidebarBigNews from "../components/sidebarBigNews.jsx";
import SignalCard from "../components/signalCard.jsx";
import SidebarAdvert from "../components/sidebarAdvert.jsx";
import News from "../components/news.jsx";
import NewsTable from "../components/newsTable.jsx";
import SearchBar from "../components/searchBar.jsx";
import FilterButtons from "../components/filterButtons.jsx";
import SidebarComment from "../components/sidebarComment.jsx";
import PageTabs from "../components/pageTabsButtons.jsx";

const Haber = () => {
  return (
    <div className=" md:w-[1200px] w-full mx-auto">
      <div>
        <Carousel />
      </div>
      <div className="flex gap-8 mt-12 flex-col md:flex-row">
        <div className=" flex flex-1 flex-col w-full mx-auto  gap-6">
          <SearchBar />
          <FilterButtons />
          <NewsTable/>
          <PageTabs/>
        </div>
        <div className="flex flex-col gap-6 w-full px-2 md:px-0 md:w-[384px] flex-shrink-0">
          <News />
          <div className="w-[300px] h-[250px] mx-auto flex justify-center items-center border">
            advert 300x250
          </div>
          <SidebarComment/>
          <SidebarAdvert/>
        </div>
      </div>
    </div>
  );
};

export default Haber;
