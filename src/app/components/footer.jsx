import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logoWhite.png";
import LogoIos from "../../../public/ios.svg";
import LogoGoogle from "../../../public/google.svg";
import FaceIcon from "../../../public/facebook.svg";
import InstaIcon from "../../../public/instagram.svg";
import LinkedIcon from "../../../public/linkedin.svg";
import TwitIcon from "../../../public/twitter.svg";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <div className=" relative w-full h-[769px] bg-banner-bg flex rounded-t-[32px] md:rounded-t-[100px] ">
      <div className="w-[1200px] mx-auto flex flex-col justify-center items-center text-white gap-2 p-2 md:p-0 md:gap-24">
        <div className="flex flex-col md:flex-row  items-start md:justify-between md:items-center gap-10 md:gap-48">
          <div className="flex flex-col  items-start gap-5 md:gap-12">
            <div className=" flex md:hidden gap-7 text-[16px]">
              <Link href={"/"}>Anasayfa</Link>
              <Link href={"/"}>Takvim</Link>
              <Link href={"/"}>Haber</Link>
              <Link href={"/"}>Sosyal</Link>
              <Link href={"/"}>Sinyal</Link>
            </div>
            <Image src={Logo} className="scale-75 md:scale-100  " />
            <p className=" w-[33ch] text-[18px]">
              Lorem ipsum dolor sit amet consectetur. A ornare sodales nec
              ligula dictumst a cursus. Facilisi nibh sed elementum nulla. Ac
              sed nunc id interdum feugiat ut mi dolor fames. Diam condimentum
              et vivamus interdum et.
            </p>
            <div className="flex  gap-4 md:gap-8">
              <Image
                src={FaceIcon}
                width={47.22}
                height={47.22}
                className="rounded-[8.85px] border bg-white p-2"
              />
              <Image
                src={InstaIcon}
                width={47.22}
                height={47.22}
                className="rounded-[8.85px]  bg-blue-btn p-2"
              />
              <Image
                src={TwitIcon}
                width={47.22}
                height={47.22}
                className="rounded-[8.85px] border bg-white p-2"
              />
              <Image
                src={LinkedIcon}
                width={47.22}
                height={47.22}
                className="rounded-[8.85px] border bg-white p-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-14 items-start md:items-end">
            <div className=" hidden md:inline-flex gap-8 text-[16px]">
              <Link href={"/"}>Anasayfa</Link>
              <Link href={"/"}>Takvim</Link>
              <Link href={"/"}>Haber</Link>
              <Link href={"/"}>Sosyal</Link>
              <Link href={"/"}>Sinyal</Link>
            </div>
            <p className="flex flex-col  md:text-right text-[16px] md:text-[24px] md:min-w-[36ch]">
              Ekonomi Takvimi Mobil Uygulamamızı{" "}
              <span className="font-bold">
                iOS ve Android Marketten ücretsiz indirin!
              </span>
            </p>
            <div className="flex">
              <div className="flex gap-3 md:gap-6 justify-center">
                <Image
                  src={LogoIos}
                  width={234}
                  height={77.31}
                  className=" w-[166.43px] h-[54.96px] md:h-[77.31px] md:w-[234.08px] border-white md:px-4 py-2 bg-white rounded-xl"
                />
                <Image
                  src={LogoGoogle}
                  width={234}
                  height={77.31}
                  className="  w-[166.43px] h-[54.96px] md:h-[77.31px] md:w-[234.08px] border-black bg-black rounded-xl md:px-4 py-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col   justify-center md:items-center gap-8">
          <div className="flex items-center gap-2 md:gap-10 flex-col md:flex-row font-md text-[16px] md:text-[24px]">
            <Link href={"/"}>Gizlilik sözleşmesi</Link>
            <Link href={"/"} className="text-blue-btn">
              Şartlar ve Koşullar
            </Link>
            <Link href={"/"}>Risk İçerir</Link>
          </div>
          <p className="font-l text-[14px] text-center max-w-[46ch] text-light-text">
            Copyrights © EkonomiTakvimi.com by Huzk Ltd 2022. Tüm Hakları
            Saklıdır.
          </p>
        </div>
        <button className="hidden md:inline-flex  absolute bottom-0 left-[46%] scale-50 md:scale-100 p-5 w-[200px] h-[76px] rounded-t-[10px] bg-blue-btn  items-center justify-center">
          {" "}
          <IoIosArrowUp size={46} className="" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Footer;
