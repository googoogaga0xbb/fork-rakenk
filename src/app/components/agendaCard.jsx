import React from "react";
import DolarIcon from "../../../public/dolar.svg";
import EuroIcon from "../../../public/euro.svg";
import Image from "next/image";

const items = [
  {
    icon: DolarIcon,
    content: "USD - İnşaat İzinleri Bugün 14:00’da açıklanacak.",
    date: "18/11/22 - 09:00",
    color: "green",
  },
  {
    icon: EuroIcon,
    content: " GBP - İnşaat İzinleri Bugün 14:00’da açıklanacak.",
    date: "18/11/22 - 09:00",
    color: "blue",
  },
  {
    icon: DolarIcon,
    content: " USD - İnşaat İzinleri Bugün 14:00’da açıklanacak.",
    date: "18/11/22 - 09:00",
    color: "green",
  },
];

const values = [
  {
    color: "purple-400",
    value: "0.2332"
  },
  {
    color: "green-bg",
    value: "0.4411"
  },
  {
    color: "red-200",
    value: "0.2222"
  },
];

const AgendaCard = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="w-[384px] h-[222px] border flex flex-col justify-center p-6 bg-agenda-bg rounded-[16px]">
        <h3 className="font-bold">Gündemdekiler</h3>
        {items.map((item, i) => (
          <div key={i} className="flex justify-center items-center gap-3">
            <Image
              src={item.icon}
              width={28}
              height={28}
              className={`flex px-[8px] py-[5px] rounded-full ${
                item.color == "blue" ? "bg-banner-bg" : "bg-circle-green"
              }`}
            />
            <div>
              <span className="text-[8px] font-m">{item.date}</span>
              <p className="text-[12px] font-[700] max-w-[30ch]">
                {item.content}
              </p>
            </div>
            <button
              key={i}
              className={`text-[7px] px-2 py-2 rounded-[5px] ${
                item.color == "blue"
                  ? "bg-banner-bg text-white"
                  : "bg-circle-green "
              }`}
            >
              İNCELE
            </button>
          </div>
        ))}
      </div>
      <div className=" flex justify-between">
        <div className="rounded-[16px] w-[180px] h-[180px] p-2 flex flex-col gap-[5px] bg-card-bg">
          <h3 className="text-[18px] font-[800] text-blue-btn">JPY/USD</h3>
          <p className="text-[8px] font-[500] text-android-card">
            Lorem ipsum dolor sit amet consectetur. Lectus ipsum nunc pharetra
            est consectetur amet ornare. Et tortor consectetur maecenas non.
          </p>
          {values.map((item, i) => (
            <div key={i} className="flex justify-between items-center">
              <p className="text-[8px]">Açıklanan</p>
              <span className={`text-${item.color}`}>-----</span>
              <span className="text-[8px]">{item.value}</span>
            </div>
          ))}
        </div>
        <div className=" w-[180px] h-[180px] p-2 flex flex-col gap-[5px] rounded-[16px]  bg-orange-card-bg">
          {" "}
          <h3 className="text-[18px] font-[800] text-orange-text ">JPY/USD</h3>
          <p className="text-[8px] font-[500] text-android-card">
            Lorem ipsum dolor sit amet consectetur. Lectus ipsum nunc pharetra
            est consectetur amet ornare. Et tortor consectetur maecenas non.
          </p>
          {values.map((item, i) => (
            <div key={i} className="flex justify-between items-center">
              <p className="text-[8px]">Açıklanan</p>
              <span className={`text-${item.color}`}>-----</span>
              <p key={i} className="text-[8px] text-black">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgendaCard;
