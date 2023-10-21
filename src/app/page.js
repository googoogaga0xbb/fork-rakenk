import AgendaCard from "./components/agendaCard";
import Carousel from "./components/carousel";
import FilterButtons from "./components/filterButtons";
import MobCard from "./components/mobCard";
import News from "./components/news";
import ParityTable from "./components/parityTable";
import SearchBar from "./components/searchBar";
import SignalCard from "./components/signalCard";
import SidebarAdvert from "./components/sidebarAdvert";


export default function Home() {
  return (
    <main className="w-full md:w-[1200px] mx-auto  ">
      <div className="flex justify-between items-center flex-col md:flex-row gap-5">
        <div className="w-full mx-auto md:w-[792px] h-[240px] md:h-[420px] px-2 md:px-0">
          <Carousel />
        </div>
        <div className="md:hidden w-full px-2">
          <MobCard />
        </div>
        <div className="px-2 md:px-0">
          <AgendaCard />
        </div>
      </div>
      <div className="flex gap-6 mt-6 h-full px-2 md:px-0">
        <div className=" w-full md:w-[790px] h-auto flex flex-col gap-6 mt-12">
          <SearchBar />
          <FilterButtons />
          <ParityTable />
          
        </div>
        <div className="flex-col gap-4 hidden md:flex mt-24 ">
          <div className="w-full md:w-[386px]  ">
            <SignalCard />{" "}
          </div>
          <div className="w-[384px]  h-auto">
            <News />
          </div>
          <div className="w-[300px] h-[600px] mx-auto">
          <SidebarAdvert/>
          </div>
        </div>
      </div>
    </main>
  );
}
