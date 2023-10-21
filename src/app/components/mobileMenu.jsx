"use client"
import {useUser} from '../context/store'
import Image from "next/image";
import React, { useEffect } from "react";
import Logo from "../../../public/logo.png";
import CloseIcon from "../../../public/close.svg";
import ArrowRight from "../../../public/arrowRight.svg";
import Ios from "../../../public/menuIosIcon.svg";
import Google from "../../../public/menuGoogleIcon.svg";
import Facebook from "../../../public/menuFacebook.svg";
import Instagram from "../../../public/menuInstagram.svg";
import Twitter from "../../../public/menuTwitter.svg";
import Linkedin from "../../../public/menuLinkedin.svg";
import Switch from '@mui/material/Switch';
import Link from "next/link";



const MobileMenu = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const {user,updateUser} = useUser();
    
    const handleClick = () => {
        updateUser(!user);
    };
  return (
    <>
   
      <div className=" top-0 right-0 text-[12px] font-bold text-[#15141F] bg-white z-[99] w-[326px] fixed h-[100%] border flex flex-col gap-4 float-right py-8 px-6">
        <div className="flex justify-between mb-12">
          <Image src={Logo} alt={"logo"} width={117} height={38} />
          <Image src={CloseIcon} alt={"logo"} width={24} height={24} onClick={handleClick}  className='curser-pointer'/>
        </div>
        <div className="flex flex-col h-[65vh]  justify-between">
          <div className="border-b-[1.42px] h-auto flex justify-between ">
            <Link href="/">Anasayfa</Link>
            <Image src={ArrowRight} width={17.71} height={17.71} />
          </div>
          <div className="border-b-[1.42px] h-auto flex justify-between">
            <Link href="/">Profilim</Link>
            <Image src={ArrowRight} width={17.71} height={17.71} />
          </div>
          <div className="border-b-[1.42px] h-auto flex justify-between">
            <Link href="/">Takvim</Link>
            <Image src={ArrowRight} width={17.71} height={17.71} />
          </div>
          <div className="border-b-[1.42px] h-auto flex justify-between">
            <Link href="/">Haber</Link>
            <Image src={ArrowRight} width={17.71} height={17.71} />
          </div>
          <div className="border-b-[1.42px] h-auto flex justify-between">
            <Link href="/">Sosyal</Link>
            <Image src={ArrowRight} width={17.71} height={17.71} />
          </div>
          <div className="border-b-[1.42px] h-auto flex justify-between">
            <Link href="/">Hakkımızda</Link>
            <Image src={ArrowRight} width={17.71} height={17.71} />
          </div>
          <div className="border-b-[1.42px] h-auto flex justify-between">
            <Link href="/">Gizlilik Sözleşmesi</Link>
            <Image src={ArrowRight} width={17.71} height={17.71} />
          </div>
          <div className="border-b-[1.42px] h-auto flex justify-between">
            <Link href="/">Kullanım Şartları</Link>
            <Image src={ArrowRight} width={17.71} height={17.71} />
          </div>
          <div className="border-b-[1.42px] h-auto flex justify-between">
            <Link href="/">Sorumluluk Reddi</Link>
            <Image src={ArrowRight} width={17.71} height={17.71} />
          </div>
          <div className="border-b-[1.42px] h-auto flex justify-between">
            <Link href="/">Sms Bildirimi</Link>
            <Switch {...label} />
            
          </div>
          <div className="border-b-[1.42px] h-auto flex justify-between">
            <Link href="/">Soldan Sağa</Link>
            <Switch {...label} />
            
          </div>
        </div>
        <div className="flex justify-between">
            <Image src={Ios} width={120} height={40} />
            <Image src={Google} width={120} height={40} />
        </div>
          <div className="flex justify-around">
            <div className="w-[47.22px] h-[47.22px] bg-[#15141F0D] flex items-center justify-center rounded-[8.85px]">
            <Image src={Facebook} width={20.66} height={20.66} />
            </div >
            <div className="w-[47.22px] h-[47.22px] bg-[#15141F0D] flex items-center justify-center rounded-[8.85px]">
            <Image src={Instagram} width={20.66} height={20.66} />
            </div>
            <div className="w-[47.22px] h-[47.22px] bg-[#15141F0D] flex items-center justify-center rounded-[8.85px]">
            <Image src={Twitter} width={20.66} height={20.66} />
            </div>
            <div className="w-[47.22px] h-[47.22px] bg-[#15141F0D] flex items-center justify-center rounded-[8.85px]">
            <Image src={Linkedin} width={20.66} height={20.66} />
            </div>
          </div>
          <span className="text-center text-[10.33px] text-[#15141F80]">EkonomiTakvimi.com © 2022 v1.0</span>
      </div>
      
    </>
  );
};

export default MobileMenu;
