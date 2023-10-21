import React from "react";
import { data } from "../datas/commentData";
import Link from "next/link";

const SidebarComment = () => {
  return (
    <div className="h-[523px] flex flex-col gap-2 border  w-full border-android-card/25 rounded-[10px]  px-6 md:px-12 py-6">
      <h2 className="text-[24px] font-bold">Yorum</h2>
      {data.map((item, index) => {
        return (
          <div className="mx-auto">
            <div className="px-9 mb-2">
              <span className="text-android-card text-[8px] font-md">{item.publishDate}</span>
              <p className="text-[12px] font-bold">{item.username}</p>
            </div>
            <p className="text-android-card text-[10px] font-md max-w-[50ch] ">{item.content}</p>
            <Link href={item.url} className="text-blue-btn text-[10px] font-md">Yorumu Gör...</Link>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarComment;
