import React from "react";
import { contentData } from "../datas/socialData";
import Image from "next/image";

const SocialTable = () => {
    const sliced = contentData.slice(0,4);
  return (
    <div className="flex flex-wrap gap-6">
      {contentData.map((item, index) => (
        <>
          {index % 8 === 0  &&
            <div className="hidden md:flex h-[100px] flex-shrink-0 w-[750px] mx-auto bg-android-card/25">
              advert
            </div>
          }
          <div
            key={index}
            className="hidden relative border-2 w-[361px] h-[240px] md:flex flex-col p-4 gap-4 rounded-[12px]"
          >
            <div className="flex gap-3">
              <div>
                <Image src={item.img} className="w-[480px] h-[142px]" />
              </div>
              <div className="flex flex-col gap-[1.2px]">
                <span className="flex justify-end text-[9.64px] font-md text-android-card">
                  {item.date}
                </span>
                <span
                  className={`text-[10px] font-bold ${
                    item.source == "//INSTAGRAM"
                      ? "text-orange-500"
                      : "text-blue-btn"
                  }`}
                >
                  {item.source}
                </span>
                <h3 className="text-[14px] font-bold max-w-[21ch] ">
                  {item.title}
                </h3>
                <p className="text-[12px] font-md text-android-card">
                  {item.content}
                </p>
              </div>
            </div>
            <div className="flex flex-col px-14">
              <span className="text-[14.46px] font-bold">{item.name}</span>
              <span className="text-[12px] font-[600] text-android-card">
                {item.username}
              </span>
            </div>
            <button
              className={`absolute  bottom-0 right-0 text-white py-3 px-3 text-[9.64px] rounded-tl-lg rounded-br-lg ${
                item.source === "//INSTAGRAM" ? "bg-orange-400" : "bg-blue-btn"
              }`}
            >
              Devamını Gör...
            </button>
          </div>
          {index  === 15  &&
            <div className="hidden md:flex h-[100px] flex-shrink-0 w-[750px] mx-auto bg-android-card/25">
              advert
            </div>
          }
        </>
      ))}
            {/* mobil ekranda görünecek kısım */}

       {sliced.map((item, index) => (
        <>
          <div
            key={index}
            className="flex relative border-2 w-full h-[240px] md:hidden flex-col p-4 gap-4 rounded-[12px]"
          >
            <div className="flex gap-3">
              <div>
                <Image src={item.img} className="w-[480px] h-[142px]" />
              </div>
              <div className="flex flex-col gap-[1.2px]">
                <span className="flex justify-end text-[9.64px] font-md text-android-card">
                  {item.date}
                </span>
                <span
                  className={`text-[10px] font-bold ${
                    item.source == "//INSTAGRAM"
                      ? "text-orange-500"
                      : "text-blue-btn"
                  }`}
                >
                  {item.source}
                </span>
                <h3 className="text-[14px] font-bold max-w-[21ch] ">
                  {item.title}
                </h3>
                <p className="text-[12px] font-md text-android-card">
                  {item.content}
                </p>
              </div>
            </div>
            <div className="flex flex-col px-14">
              <span className="text-[14.46px] font-bold">{item.name}</span>
              <span className="text-[12px] font-[600] text-android-card">
                {item.username}
              </span>
            </div>
            <button
              className={`absolute  bottom-0 right-0 text-white py-3 px-3 text-[9.64px] rounded-tl-lg rounded-br-lg ${
                item.source === "//INSTAGRAM" ? "bg-orange-400" : "bg-blue-btn"
              }`}
            >
              Devamını Gör...
            </button>
          </div>
        </>
        ))}
    </div>
  );
};

export default SocialTable;
