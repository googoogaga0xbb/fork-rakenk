import React from "react";
import { contentData } from "../datas/socialData";
import Image from "next/image";
import Link from "next/link";

const SocailTable2 = () => {
  const sliced = contentData.slice(0, 6);
  const fourItem = contentData.slice(0, 4);

  let text =
    "Lorem ipsum dolor sit amet consectetur. Amet volutpat tellus facilisi tortor accumsan vivamus. Ultrices a nec maecenas amet nunc non. Venenatis proin porttitor facilisi vitae molestie fringilla ornare. Fringilla tortor mi integer aliquam mattis nulla ac diam. ";
  return (
    <div className="flex flex-col gap-4 md:gap-6 mt-8">
      {sliced.map((item, index) => (
        <>
          {index % 3 === 0 && (
            <div className="hidden md:flex w-[750px] h-[200px] bg-android-card mx-auto">
              {" "}
              advert
            </div>
          )}
          <div className="hidden px-8 py-8 border-2 md:flex flex-col gap-6 rounded-[10px]">
            <div className="flex gap-8">
              <div className="relative">
                <Image src={item.img} className="w-[159px] h-[168px]" />
                <span className="absolute top-4 left-0 text-white bg-blue-btn py-[4.3px] px-[20px] rounded-r-[10px]">
                  {item.type}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-md text-android-card/25 flex justify-end">
                  {item.date}
                </span>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold">{item.name}</span>
                  <span className="text-[12px] font-[600] text-android-card">
                    {item.username}
                  </span>
                </div>
                <h3 className="text-[24px] font-bold">{item.title}</h3>
                <p className="text-[12px] w-[70ch] font-md text-android-card">
                  {text}
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-[14px] font-md text-android-card">
                {item.provider}
              </span>
              <Link href={"/"} className="text-blue-btn text-[18px] font-md">
                Devamını gör ..
              </Link>
            </div>
          </div>
          {index === 5 && (
            <div className="hidden md:flex w-[750px] h-[200px] bg-android-card mx-auto mb-4">
              {" "}
              advert
            </div>
          )}
        </>
      ))}
      {fourItem.map((item, index) => (
        <>
          <div
            key={`itm-${index}`}
            className="flex relative border-2 w-full h-[240px] md:hidden flex-col p-4 gap-4 mx-auto rounded-[12px] "
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

export default SocailTable2;
