import React from "react";
import Image from "next/image";

const NewsPageItem = ({ data }) => {
  return (
    <div className=" relative h-full flex flex-col  items-center gap-5 md:gap-2 px-2">
      <Image
        src={data.img}
        width={240}
        height={110}
        className=" rounded-[6.56px]   w-full h-[140px]"
      />
      <span className="absolute bg-blue-btn  text-white text-[9.45px] rounded-r-[5px] px-3 py-1 left-2 top-5 uppercase">{data.type}</span>
      <h3 className="text-[14px] font-bold">{data.title}</h3>
      <p className="text-[10px] text-android-card">{data.content}</p>
      <div className="flex justify-between gap-14 mt-2">
        <span className="text-[8px] text-android-card">
          {data.source} - {data.publishDate}
        </span>
        <button className="absolute text-[8px] right-0 bottom-0 bg-blue-btn p-2 rounded-tl-lg rounded-br-md" >Devamını gör..</button>
      </div>
    </div>
  );
};

export default NewsPageItem;
