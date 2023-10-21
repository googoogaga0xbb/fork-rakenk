import React from "react";
import Image from "next/image";
import { datas } from "../datas/socialData";


const SocialNews = () => {
 

  return (
    <div className=" sm:pl-0 md:pl-2 h-[420px] lg:pl-[18%]  md:flex flex-col gap-4">
      <div className="flex  gap-4 overflow-hidden px-2 md:px-0">
        <div className="hidden md:flex flex-col gap-4 items-center justify-center">
          <button className="w-2 h-8 rounded-xl bg-blue-btn" />
          <button className="w-2 h-2 rounded-xl bg-android-card/25" />
          <button className="w-2 h-2 rounded-xl bg-android-card/25" />
          <button className="w-2 h-2 rounded-xl bg-android-card/25" />
          <button className="w-2 h-2 rounded-xl bg-android-card/25" />
          <button className="w-2 h-2 rounded-xl bg-android-card/25" />
          <button className="w-2 h-2 rounded-xl bg-android-card/25" />
          <button className="w-2 h-2 rounded-xl bg-android-card/25" />
          <button className="w-2 h-2 rounded-xl bg-android-card/25" />
          <button className="w-2 h-2 rounded-xl bg-android-card/25" />
        </div>

        {datas.map((item, index) => (
          <div
            key={index}
            className="relative overflow-x-auto flex-shrink-0 bg-gradient-to-b from-white via-gray-600 to-black w-[328px] h-[420px] rounded-[20px] flex flex-col gap-3 justify-end text-white py-6 px-4"
          >
            <span className="absolute text-white bg-blue-btn top-20 left-0 rounded-r-[10px] px-6 py-2 ">{item.type}</span>
            <h3 className="text-[30px] font-bold w-[12ch]">{item.title}</h3>
            <div className="flex gap-2 items-center">
              <Image src={item.icon} alt={item.title} width={40} height={40} />
              <div className="text-[14px] font-md ">
                <span>{item.publishTime}</span>
                <p>{item.provider}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden flex gap-4 items-center justify-center mt-3">
        <button className="w-8 h-2 rounded-xl bg-blue-btn" />
        <button className="w-2 h-2 rounded-xl bg-android-card/25" />
        <button className="w-2 h-2 rounded-xl bg-android-card/25" />
        <button className="w-2 h-2 rounded-xl bg-android-card/25" />
        <button className="w-2 h-2 rounded-xl bg-android-card/25" />
        <button className="w-2 h-2 rounded-xl bg-android-card/25" />
        <button className="w-2 h-2 rounded-xl bg-android-card/25" />
        <button className="w-2 h-2 rounded-xl bg-android-card/25" />
        <button className="w-2 h-2 rounded-xl bg-android-card/25" />
        <button className="w-2 h-2 rounded-xl bg-android-card/25" />
      </div>
    </div>
  );
};

export default SocialNews;
