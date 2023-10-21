import FilterButtons from "../components/filterButtons";
import News from "../components/news";
import ParityTable from "../components/h3parityTable";
import SearchBar from "../components/searchBar";
import SidebarAdvert from "../components/sidebarAdvert";
import Carousel from "../components/carousel";

export default function Haber3() {
  return (
    <main className="max-w-[1200px] mx-auto  md:p-0">
      <div className="flex justify-between items-center flex-col md:flex-row gap-5"></div>
      <div className="flex flex-col md:flex-row gap-6 mt-6 h-full px-2 md:px0">
      <div className="md:hidden w-full md:w-[792px] h-[240px] md:h-[420px] px-2 md:px-0">
          <Carousel />
        </div>
        <div className=" w-full md:w-[790px] h-auto flex flex-col gap-6">
          <SearchBar />
          <FilterButtons />
          <ParityTable />
        </div>
        <div className="flex-col gap-4  flex">
          <div className="w-[384px] border h-auto">
            <News />
          </div>
          <div className="w-[300px] h-[600px] mx-auto">
            <SidebarAdvert />
          </div>
        </div>
      </div>
    </main>
  );
}
