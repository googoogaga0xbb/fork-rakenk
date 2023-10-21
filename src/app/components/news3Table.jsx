import React from "react";
import { news3Data } from "../datas/newsData";
import Advert from "./advert750x100";
import Link from "next/link";
import SocialNews from "./socialNewsTable";

const News3 = () => {
  const chatContent =
    "Lorem ipsum dolor sit amet consectetur. Convallis nulla dictum tincidunt nunc porttitor vivamus lorem pulvinar sit. Tellus vulputate quam vulputate eu in vulputate aliquet. Vitae fusce morbi molestie dictum et at vulputate. Interdum magna amet a ultrices leo. Sed consectetur arcu augue hac rutrum urna turpis. Lacinia sit porttitor amet morbi amet sed. Maecenas sapien sit ut viverra bibendum.";
  const content = news3Data[0].content;
  return (
    <div className="flex flex-col border-[1.42px] rounded-[10px] gap-6 border-[#15141F40] md:py-12 ">
      <div className="flex flex-col px-8">
        <div className="text-[14px]">
          <span className="text-blue-btn font-bold">//HABER</span>
          <span className="font-md">ShifDelete.Net - 5 dk. önce</span>
        </div>
        <div>
          <h2 className="font-[800] text-[24px]">
            Bitcoin yeniden 20.000$’ın üzerine çıktı!
          </h2>
        </div>
      </div>
      <div className=" h-[50] md:h-[100px] bg-[#15141F40] text-center mx-auto w-full ">
        advert
      </div>
      <div className="px-8">
        <p className="text-[14px] font-md">{content}</p>
      </div>
      <div className=" h-[100px] bg-[#15141F40] text-center mx-auto w-full ">
        advert
      </div>
      <div className="px-8">
        <p className="text-[14px] font-md max-w-[85ch]">{content}</p>
      </div>
      <div className=" h-[100px] bg-[#15141F40] text-center mx-auto w-full ">
        advert
      </div>
      <div className="px-8 flex flex-col gap-4">
        {/* item 1 */}
        <div className="text-[#15141F80] px-12 flex flex-col gap-1 border-[1.42px] rounded-xl py-6">
          <div className="flex justify-between ">
            <div className="flex flex-col ml-12 ">
              <span className="text-[8px] font-bold">03/10/2022</span>
              <span className="text-[12px] font-bold text-[#15141F]">
                Aydın ER
              </span>
            </div>
            <span className="text-[8px] font-md">1 Kez Cevaplandı</span>
          </div>
          <p className="text-[10px]">{chatContent}</p>
          <Link
            href={"/"}
            className="text-blue-btn flex justify-end text-[12px] mt-2"
          >
            Cevapla
          </Link>
        </div>
        {/* item 2 */}
        <div className="text-[#15141F80] px-12 flex flex-col gap-1 border-[1.42px] ml-auto rounded-xl w-[80%]  bg-[#15141F40]/25 py-6">
          <div className="flex justify-between ">
            <div className="flex flex-col ml-12 ">
              <span className="text-[8px] font-bold">03/10/2022</span>
              <span className="text-[12px] font-bold text-[#15141F]">
                Aydın ER
              </span>
            </div>
            <span className="text-[8px] font-md">1 Kez Cevaplandı</span>
          </div>
          <p className="text-[10px]">{chatContent}</p>
          <Link
            href={"/"}
            className="text-blue-btn flex justify-end text-[12px] mt-2"
          >
            Cevapla
          </Link>
        </div>

        {/* item 3 */}
        <div className="text-[#15141F80] px-12 flex flex-col gap-1 border-[1.42px] rounded-xl py-6">
          <div className="flex justify-between ">
            <div className="flex flex-col ml-12 ">
              <span className="text-[8px] font-bold">03/10/2022</span>
              <span className="text-[12px] font-bold text-[#15141F]">
                Aydın ER
              </span>
            </div>
            <span className="text-[8px] font-md">1 Kez Cevaplandı</span>
          </div>
          <p className="text-[10px]">{chatContent}</p>
          <Link
            href={"/"}
            className="text-blue-btn flex justify-end text-[12px] mt-2"
          >
            Cevapla
          </Link>
        </div>

        {/* feedback */}
        <div className="text-[14px] font-md text-[#15141F80] flex border border-[#15141F40] rounded-lg flex-col gap-6 p-2 md:p-6">
          <h2 className="text-[24px] font-[800] text-[#15141F]">
            Bir Yorum Bırak !
          </h2>
          <p className="font-[400]">
            Lorem ipsum dolor sit amet consectetur. Nunc vehicula tellus mauris
            sit enim in amet egestas. Commodo posuere ut ullamcorper dictumst.
            Sed nunc euismod neque vel dignissim. Aliquam.
          </p>
          <div className="flex gap-12 ">
            <div className="flex flex-col w-full gap-2">
              <span>Ad ve Soyad</span>
              <input
                type="text"
                placeholder="Ad ve Soyad"
                className="h-[43.34px] border-[1.81px] w-full  border-[#15141F40] rounded-lg pl-2 text-[#15141F]"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <span>Email</span>
              <input
                type="text"
                placeholder="Email"
                className="h-[43.34px] border-[1.81px] w-full border-[#15141F40] rounded-lg pl-2 text-[#15141F]"
              />
            </div>
          </div>
          <input
            type="textarea"
            placeholder="Lütfen bir yorum giriniz..."
            className="w-full h-[95.71px] border-[1.81px] rounded-lg placeholder-t-0"
          ></input>
          <button
            type="submit"
            className="bg-blue-btn w-[26%]  h-[48px] text-white rounded-xl ml-auto "
          >
            Yorumu Gönder
          </button>
        </div>

        {/* social news */}
      </div>
    </div>
  );
};

export default News3;
