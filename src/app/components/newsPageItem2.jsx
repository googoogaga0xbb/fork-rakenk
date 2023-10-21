import React from "react";
import Image from "next/image";

const NewsPageItem2 = ({ data }) => {
  const slicedData = data.slice(0, 6);
  const content =
    "Lorem ipsum dolor sit amet consectetur. Sagittis quam vitae tellus sed imperdiet nisl malesuada. Magna turpis placerat ut lorem massa lacus eu magna gravida. Nunc quis urna maecenas id. Aliquet porta sapien ornare sit. Tempus quis aliquam curabitur sed at tortor scelerisque placerat enim. Mauris quis arcu sit sed diam laoreet. Rhoncus laoreet arcu massa duis mauris non nibh. Donec varius tellus id id libero adipiscing. Neque feugiat montes enim id urna sagittis...";
  return (
    <div className="flex flex-col gap-4">
      {slicedData.map((item, index) => (
        <>
          {index === 0 && (
            <div className="md:hidden w-[375px] h-[50px]  bg-android-card/25 mx-auto border">
              {" "}
              google ads
            </div>
          )}
          {index % 3 === 0 && (
            <div className="hidden md:flex w-[375px] h-[50px] md:w-[750px] md:h-[200px] bg-android-card/25 mx-auto border">
              {" "}
              google ads
            </div>
          )}
          <div
            className="relative w-full border border-android-card/25 rounded-[10px] px-4 py-4 flex flex-col gap-8"
            key={index}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <Image
                src={item.img}
                width={100}
                height={100}
                className=" w-full md:w-[314px] h-[195px]"
              />
              <span className="absolute left-4 top-10 text-white bg-blue-btn rounded-r-[10px] text-[19px]  px-4 py-1 ">
                Kripto
              </span>
              <div className="flex flex-col justify-center ">
                <h4 className="text-[14px] md:text-[24px] font-bold">
                  {item.title}
                </h4>
                <p className=" max-w-[60ch] text-[10px] font-md text-android-card">
                  {content}
                </p>
              </div>
            </div>
            <div className="flex justify-between ">
              <span className="text-[14px] font-md text-android-card/25">
                {item.source} {item.publisDate}
              </span>
              <button className="font-[18px] font-md text-blue-btn ">
                Devamını Gör...
              </button>
            </div>
          </div>
          {index === 5 && (
            <div className="hidden md:flex w-[750px] h-[200px] bg-android-card/25 mx-auto border">
              750x200 google ads
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default NewsPageItem2;
