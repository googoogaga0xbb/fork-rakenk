import React from "react";
import { data } from "../datas/calenderData";
import ArrowUp from "../../../public/arrowUp.svg";
import ArrowDown from "../../../public/arrowDown.svg";
import Image from "next/image";
import PurplePremium from "../../../public/premiumPurple.svg";
import BluePremium from "../../../public/premiumBlue.svg";
import PurpleArrow from "../../../public/purpleArrow.svg";
import BlueArrow from "../../../public/blueArrow.svg";

const CalenderMobil = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {data.map((item, index) => (
        <>
          <div className="flex md:hidden flex-col p-2  h-[76] md:h-[72px] gap-2 text-[14px] w-full border-[1px] font-bold mx-auto border-android-card/25 rounded-[10px]">
            <div className="flex justify-between">
              <span>{item.parity}</span>
              <span
                className={`flex  ${
                  item.mobilePosition == "SAT"
                    ? "text-[#ED1818]"
                    : "text-[#00AC63]"
                }`}
              >
                <Image
                  src={item.mobilePosition === "AL" ? ArrowUp : ArrowDown}
                  width={20}
                  height={20}
                />
                {item.mobilePosition}
              </span>
              <span className="text-android-card font-md">Kar Al (TP)</span>
              <span className="text-android-card font-md">
                Zarar Durdur (SL)
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-android-card font-md">{item.date}</span>
              <span>{item.enteryPrice}</span>
              <span>{item.takeProfit}</span>
              <span className="ml-16">{item.stopLoss}</span>
            </div>
          </div>
        </>
      ))}

      {/* item 1 */}

      <div className="w-full md:hidden">
        <div className="bg-[#00AC63] text-white font-bold text-[14px] rounded-t-[10px] h-[45px] flex items-center justify-center">SİNYAL BAŞARYILA SONUÇLANMIŞTIR</div>
        <div className="flex  flex-col p-2 h-[72px] gap-2 text-[14px] w-full border-[1px] font-bold mx-auto border-android-card/25 rounded-b-[10px]">
          <div className="flex justify-between">
            <span>ETH-USDT</span>
            <span className={"flex text-[#ED1818]"}>
              <Image src={ArrowDown} width={20} height={20} />
              <span className="text-[#ED1818]"> Sat</span>
            </span>
            <span className="text-android-card font-md">Kar Al (TP)</span>
            <span className="text-android-card font-md">Zarar Durdur (SL)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-android-card font-md">21.11.22</span>
            <span>12632</span>
            <span>12670</span>
            <span className="ml-16">12600</span>
          </div>
        </div>
      </div>

      {/* item 2 */}

      <div className="w-full md:hidden">
        <div className="bg-[#00AC63] text-white font-bold text-[14px] rounded-t-[10px] h-[45px] flex items-center justify-center">SİNYAL BAŞARYILA SONUÇLANMIŞTIR</div>
        <div className="bg-[#1428BF] h-[45px] flex items-center justify-center space-x-2">
        <Image src={PurplePremium} width={22.66} height={20} className="w-[24px] h-[22px]"/>
            <h3 className="font-bold text-[14px] text-white">
                Premium Sinyalleri <span className="text-[#DF5CF0]">Keşfet</span>
            </h3>
        <Image src={PurpleArrow} width={17} height={9} className="w-[18px] h-[16px]"/>
        </div>
        <div className="flex md:hidden flex-col p-2 h-[72px] gap-2 text-[14px] w-full border-[1px] font-bold mx-auto border-android-card/25 rounded-b-[10px]">
          <div className="flex justify-between">
            <span>ETH-USDT</span>
            <span className={"flex text-[#ED1818]"}>
              <Image src={ArrowDown} width={20} height={20} />
              <span className="text-[#ED1818]"> Sat</span>
            </span>
            <span className="text-android-card font-md">Kar Al (TP)</span>
            <span className="text-android-card font-md">Zarar Durdur (SL)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-android-card font-md">21.11.22</span>
            <span>12632</span>
            <span>12670</span>
            <span className="ml-16">12600</span>
          </div>
        </div>
      </div>
      <div className="md:hidden w-[375px] h-[50px] bg-[#15141F0D] text-center"> advert</div>

      {/* item 3 */}
      <div className="w-full md:hidden ">
        <div className="bg-[#ED1818] text-white font-bold text-[14px] rounded-t-[10px] h-[45px] flex items-center justify-center">SİNYAL BAŞARISIZ SONUÇLANMIŞTIR</div>
        <div className="bg-[#D0D4F2] h-[45px] flex items-center justify-center space-x-2">
        <Image src={BluePremium} width={22.66} height={20} className="w-[24px] h-[22px]"/>
            <h3 className="font-bold text-[14px] text-[#1428BF]">
                Premium Sinyalleri Keşfet
            </h3>
        <Image src={BlueArrow} width={17} height={9} className="w-[18px] h-[16px]"/>
        </div>
        <div className="flex md:hidden flex-col p-2 h-[72px] gap-2 text-[14px] w-full border-[1px] font-bold mx-auto border-android-card/25 rounded-b-[10px]">
          <div className="flex justify-between">
            <span>ETH-USDT</span>
            <span className={"flex text-[#ED1818]"}>
              <Image src={ArrowDown} width={20} height={20} />
              <span className="text-[#ED1818]"> Sat</span>
            </span>
            <span className="text-android-card font-md">Kar Al (TP)</span>
            <span className="text-android-card font-md">Zarar Durdur (SL)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-android-card font-md">21.11.22</span>
            <span>12632</span>
            <span>12670</span>
            <span className="ml-16">12600</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalenderMobil;
