import React from "react";
import Image from "next/image";
import LogoIos from "../../../public/ios.svg";
import LogoGoogle from "../../../public/google.svg";


const Banner = () => {
  return (
    <div className="w-full h-[54px] md:h-[100px] flex bg-banner-bg text-white items-center justify-between md:justify-center gap-2 md:gap-20 px-2 md:px-0">
      <div className="w-[1200px] flex justify-center items-center">
      
      <div className="flex w-2/3 md:justify-end">
        <h1 className="flex flex-col md:text-center max-w-[32ch] md:max-w-[50ch] text-[7.67px] md:text-[22px]">
          Ekonomi Takvimi Mobil Uygulamamızı{" "}
          <span className="font-bold text-[11px] md:text-[22px]">
            iOS ve Android Marketten ücretsiz indirin!
          </span>
        </h1>
      </div>
      <div className="flex w-1/3 justify-end scale-[0.70] sm:scale-[0.85] md:scale-100 md:justify-center items-center  gap-3 ">
        <Image src={LogoIos} width={146.32} height={48.32} className="bg-white py-2 px-5 rounded-xl cursor-pointer" /> 
        <Image src={LogoGoogle} width={146.32} height={48.32} className="bg-black py-2 px-5 rounded-xl cursor-pointer"/> 
      </div>
      </div>
    </div>
  );
};

export default Banner;
