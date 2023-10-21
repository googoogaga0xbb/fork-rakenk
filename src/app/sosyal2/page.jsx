import React from "react";
import SocialNews from "../components/socialNewsTable";
import News from "../components/news";
import SidebarComment from "../components/sidebarComment";
import SocailTable2 from "../components/socialTable2";
import PageTabs from "../components/pageTabsButtons";
import FilterButtons from "../components/filterButtons";

const Sosyal2 = () => {
  return (
    <div className="flex flex-col gap-6">
      <SocialNews />
      <div className="w-full md:w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-10  md:px-0">
        <div className="w-full md:w-[753px] md:flex-1 flex flex-col gap-6">
          <FilterButtons />
          <SocailTable2 />
          <PageTabs />
        </div>
        <div className="w-full md:w-[390px] flex flex-col flex-shrink-0 gap-10 mx-auto">
          <News />
          <div className="w-[300px] h-[250px] bg-android-card/25 mx-auto text-center">advert</div>
          <SidebarComment />
          <div className="w-[300px] h-[600px] mx-auto bg-android-card/25 text-center">advert</div>
        </div>
      </div>
    </div>
  );
};

export default Sosyal2;
