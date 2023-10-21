import React from "react";
import Image from "next/image";
import IosLogo from "../../../public/ios.svg";
import GoogleLogo from "../../../public/google.svg";

const IosCard = () => {
  return (
    <div className=" flex justify-between flex-col md:flex-row gap-6 mb-40 md:mb-20 w-full md:w-[1200px] mt-6 mx-auto px-2 md:px-0">
      <div className=" flex-1 h-[191px]md:h-[374px] bg-ios-card py-12 px-4 md:p-12 rounded-[20px]">
        <h3 className="text-[16px] md:text-[24px] font-[800] max-w-[12ch]">
          iOS Cihazlar için Ücretsiz İndir!
        </h3>
        <p className="text-[7.75px] md:text-[16px] font-md max-w-[38ch] mt-2 text-android-card">
          Lorem ipsum dolor sit amet, euna consectetur adipiscing elit. Eu nibh
          posuere facilisi sed. Nullam placerat convallis elit molestie egestas
          massa.
        </p>
        <Image
          src={IosLogo}
          className="bg-white rounded-[14.88px] px-4 py-2 mt-12 scale-80 md:scale-100"
        />
      </div>
      <div className=" w-full md:w-[384px] h-[114px] md:h-[374px] bg-filter-btn-border  right-[370px] rounded-[20px] bg-opacity-60  flex justify-around p-3 items-center md:flex-col  md:justify-center md:px-16">
        <div>
        <h3 className="text-[11.54px] md:text-[24px] font-[800] max-w-[20ch]">
          Android Cihazlar için Ücretsiz İndir!
        </h3>
        <p className="text-[7.75px] md:text-[16px] font-md md:max-w-[28ch] mt-2 text-android-card ">
          Lorem ipsum dolor sit amet, euna consectetur adipiscing elit. Eu nibh
          posuere facilisi sed.
        </p>
        </div>
        <Image
          src={GoogleLogo}
          className="rounded-[14.88px] bg-text px-4 py-2 md:mt-12 scale-75 md:scale-100 "
          width={180}
          height={128}
        />
      </div>
    </div>
  );
};

export default IosCard;
