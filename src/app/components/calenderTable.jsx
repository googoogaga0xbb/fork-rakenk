import React from "react";
import Down from "../../../public/down.svg";
import Bg from "../../../public/calenderSignalBg.svg";
import PurplePremium from "../../../public/premiumPurple.svg";
import BluePremium from "../../../public/premiumBlue.svg";
import PurpleArrow from "../../../public/purpleArrow.svg";
import BlueArrow from "../../../public/blueArrow.svg";

import Up from "../../../public/up.svg";
import { data } from "../datas/calenderData";
import Image from "next/image";
import CalenderMobil from "./calenderMobil";


const CalenderTable = () => {
  return (
    <>
      <div className="hidden md:flex justify-between px-4 text-[14px] font-md text-android-card gap-20">
        <div className="flex justify-start gap-[72px] ">
          <span>Zaman</span>
          <span>Parite</span>
          <span>Pozisyon</span>
        </div>
        <div className="flex justify-end gap-4">
          <span>Giriş Fiyatı</span>
          <span>Kar Al (TP)</span>
          <span className="">Zarar Durdur (SL)</span>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="w-[375px] h-[50px] md:hidden mx-auto text-center"> advert 375x50</div>
        <CalenderMobil/>   
        {data.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className="hidden md:flex justify-between text-[16px] h-[70px] font-bold"
              >
                <div className="flex w-full justify-around items-center border rounded-xl">
                  <span>{item.date}</span>
                  <span>{item.parity}</span>
                  <span
                    className={`font-[800] w-[8ch] flex justify-center ${
                      item.position == "SAT" ? "text-red-600" : "text-green-500"
                    }`}
                  >
                    {item.position}
                  </span>
                  <div className="flex items-center flex-shrink-0">
                    <Image
                      src={item.position == "SAT" ? Down : Up}
                      width={78}
                      height={40}
                    />
                  </div>
                  <span className="text-[20px]">{item.enteryPrice}</span>
                  <span className="text-[20px]">{item.takeProfit}</span>
                  <span className="text-[20px]">{item.stopLoss}</span>
                </div>
              </div>
              {index % 4 == 3 && (
                <div className="w-[750px] h-[100px] md:flex hidden justify-center items-center border-2 bg-android-card/25">
                  advert
                </div>
              )}
            </>
          );
        })}
            {/* item 1 */}
        <div className="hidden md:flex flex-col w-full ">
          <div className="bg-[#00AC63] h-[45px] md:h-[50px] text-[14px] md:text-[16px] rounded-t-[11.35px] flex items-center justify-center text-white font-bold">
            SİNYAL BAŞARI İLE SONUÇLANMIŞTIR
          </div>

          <div className="flex w-full justify-around items-center border rounded-b-xl py-2">
            <span className="font-bold text-[14px] md:text-[16px] ">21.11.22</span>
            <span className="font-bold text-[14px] md:text-[16px]">ETH/USDT</span>
            <span
              className={`font-[800] w-[8ch] flex justify-center text-[14px] md:text-[16px]
              text-red-600
              }`}
            >
              SAT
            </span>
            <div className="flex items-center flex-shrink-0 scale-75 md:scale-100">
              <Image src={Up} width={78} height={40} />
            </div>
            <span className="text-[14px] md:text-[20px] font-bold">12603</span>
            <span className="text-[14px] md:text-[20px] font-bold">12670</span>
            <span className="text-[14px] md:text-[20px] font-bold">12600</span>
          </div>
        </div>



           {/* item 2  */}
        <div className="hidden md:flex flex-col w-full">
          <div className="relative bg-[#00AC63] font-bold h-[50px] rounded-t-[11.35px] flex items-center justify-between px-8 text-white overflow-hidden">
          <span className="absolute  bg-[#1428BF] right-0 mt-36 w-[400px] h-[300px] rotate-[120deg] z-[0]"></span>
            <span>SİNYAL BAŞARI İLE SONUÇLANMIŞTIR</span>
            <span className="z-[1] text-white flex items-center gap-2">
              <Image src={PurplePremium} width={25} height={22}/>
              <p>Premium Sinyalleri <span className="text-[#DF5CF0]">Keşfet</span></p>
              <Image src={PurpleArrow} width={25} height={22} className="w-[25px] h-[22px]"/>
              </span>
          </div>

          <div className="flex w-full justify-around items-center border rounded-xl py-2">
            <span className="font-bold ">21.11.22</span>
            <span className="font-bold ">ETH/USDT</span>
            <span
              className={`font-[800] w-[8ch] flex justify-center 
                text-red-600
              }`}
            >
              SAT
            </span>
            <div className="flex items-center flex-shrink-0">
              <Image src={Up} width={78} height={40} />
            </div>
            <span className="text-[14px] md:text-[20px] font-bold">12603</span>
            <span className="text-[14px] md:text-[20px] font-bold">12670</span>
            <span className="text-[14px] md:text-[20px] font-bold">12600</span>
          </div>
        </div>
              
              
              
              
              
                {/* item 3 */}
        <div className="hidden md:flex flex-col w-full">
          <div className="relative bg-[#ED1818] h-[50px] font-bold rounded-t-[11.35px] flex items-center text-white justify-between px-8 overflow-hidden">
            <span className="absolute  bg-[#D0D4F2] right-0 mt-36 w-[400px] h-[300px] rotate-[120deg] z-[0]"></span>
            <span >SİNYAL BAŞARI İLE SONUÇLANMIŞTIR</span>
            <span className="z-[1] text-[#1428BF] flex  gap-2">
              <Image src={BluePremium} width={25} height={22}/>
              <p>Premium Sinyalleri Keşfet</p>
              <Image src={BlueArrow} width={25} height={22} className="w-[25px] h-[22px]"/>
              </span>
          </div>

          <div className="flex w-full justify-around items-center border rounded-xl py-2 ">
            <span className="font-bold ">21.11.22</span>
            <span className="font-bold ">ETH/USDT</span>
            <span
              className={`font-[800] w-[8ch] flex justify-center 
              text-red-600
              }`}
            >
              SAT
            </span>
            <div className="flex items-center flex-shrink-0 scale-75 md:scale-100">
              <Image src={Up} width={78} height={40} />
            </div>
            <span className="text-[14px] md:text-[20px] font-bold">12603</span>
            <span className="text-[14px] md:text-[20px] font-bold">12670</span>
            <span className="text-[14px] md:text-[20px] font-bold">12600</span>
          </div>
        </div>
               
      </div>
    </>
  );
};

export default CalenderTable;
