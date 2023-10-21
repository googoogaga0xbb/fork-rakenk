"use client";

import React, { useEffect, useState } from "react";
import SidebarBigNews from "./sidebarBigNews";
import { newsData } from "../datas/sidebarNewsData";
import SmallNewsCard from "./smallNewsCard";

const News = () => {
  const [bigNewsData, setBigNewsData] = useState([]);
  const [smallNewsData, setSmallNewsData] = useState([]);

  useEffect(() => {
    setBigNewsData(newsData.slice(1, 4));
    setSmallNewsData(newsData.slice(5, 10));
  }, []);

  return (
    <div className=" border rounded-xl px-12 py-2 flex flex-col mx-auto gap-4">
      <div className="flex flex-col justify-center gap-6 ">
        <h2 className="text-[24px] font-bold">Haber</h2>
        {bigNewsData.map((item, i) => (
          <SidebarBigNews
            key={`big-news-${i+44}`}
            img={item.img}
            content={item.content}
            source={item.source}
            publisDate={item.publisDate}
            title={item.title}
            link={item.link}
          />
        ))}
      </div>
      <hr className="w-[70%] mx-auto" />
      <div className="flex flex-col gap-5">
        <h2 className="text-[24px] font-bold">Sosyal</h2>
        {smallNewsData.map((item, i) => (
          <SmallNewsCard
            key={`small-news-${i+121}`}
            img={item.img}
            content={item.content}
            source={item.source}
            publisDate={item.publisDate}
            title={item.provider}
            link={item.link}
            provider={item.provider}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
