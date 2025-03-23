import Image from "next/image";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-16 gap-2 p-4">
        <div className="col-span-13">
          <Tasks></Tasks>
        </div>
        <div className="col-span-3 border-l-2 h-screen border-black">
          
          <h1 className="text-2xl font-bold ml-4 mb-4">Upcoming Events</h1>

        </div>
      </div>
    </div>
  );
}
