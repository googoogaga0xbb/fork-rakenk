import React from "react";
import NewsPageItem from "./newsPageItem";
import { newsData } from "../datas/newsData";
import Advert from "./advert750x100";

const NewsTable = () => {
    const slicedNews = newsData.slice(0,8);
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap   md:gap-4 mx-auto">
      {newsData.map((item, index) => {
        return (
            <>
            {index === 0 && <div className="mx-auto w-[375px] h-[50px] flex  md:hidden "><Advert/></div>}
            {index%12===0  && <div className="mx-auto hidden md:inline-flex"><Advert/></div>}
          <div className="hidden md:inline-flex border w-[358px] h-[299px] md:w-[250px] md:h-[299px] rounded-[10px] mx-auto mt-24 md:mt-0 ">
            <NewsPageItem key={index} data={item} />
          </div>
            {index===23  && <div className="mx-auto hidden md:inline-flex"><Advert/></div>}   
          </>
        );
      })}

    {slicedNews.map((item, index) => {
        return (
            <>
            {/* bu kısım çok doğru oldu mu biliyorum  ama bu şekilde çözdüm abi */}
            
          <div className="md:hidden border w-full h-[299px] md:w-[250px] md:h-[299px] rounded-[10px] mx-auto mt-8 md:mt-0 ">
            <NewsPageItem key={index} data={item} />
          </div>
           
          </>
        );
      })}
    </div>
  );
};

export default NewsTable;
