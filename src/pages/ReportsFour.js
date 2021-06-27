import Laptop from "../assets/images/laptop1.png";
import Mouse from "../assets/images/mouse.png";
import Xbox from "../assets/images/xbox.png";

export default function ReportsFour() {
  return (
    <>
      {/* Main content header */}
      <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
        <h1 className="text-xl font-bold whitespace-nowrap">Total Products</h1>
      </div>

      {/* Start content */}
      <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-3">

        <article className="bg-white w-4/5 cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="relative">
            <img src={Laptop} alt="Laptop" className="object-fit"/>
            <span className="absolute top-20 right-16 text-xl bg-blue-600 bg-transparent py-2 px-6 rounded-lg font-bold text-white">Commission 25%</span>
          </div>
          <div className="px-6">
            <p className="font-semibold text-md">Laptop-AsusMX456GM</p>
            <span className="block pb-5 pt-2 font-extralight">Core i7 Gen 11, Ram 16 Gb</span>
            <span className="block pb-5 text-purple-500 font-bold text-md">$1000</span>
          </div>
        </article>

        <article className="bg-white relative w-4/5 cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
        <div className="">
          <img src={Mouse} alt="Mouse"/>
          <span className="absolute top-20 right-16 text-xl bg-blue-600 bg-transparent py-2 px-6 rounded-lg font-bold text-white">Commission 25%</span>
        </div>
        <div className="px-6">
          <p className="font-semibold text-md">Laptop-AsusMX456GM</p>
          <span className="block pb-5 pt-2 font-extralight">Core i7 Gen 11, Ram 16 Gb</span>
          <span className="block pb-5 text-purple-500 font-bold text-md">$1000</span>
        </div>
        </article>

        <article className="bg-white relative w-4/5 cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
        <div className="relative">
          <img src={Xbox} alt="Xbox"/>
          <span className="absolute top-20 right-16 text-xl bg-blue-600 bg-transparent py-2 px-6 rounded-lg font-bold text-white">Commission 25%</span>
        </div>
        <div className="px-6">
          <p className="font-semibold text-md">Laptop-AsusMX456GM</p>
          <span className="block pb-5 pt-2 font-extralight">Core i7 Gen 11, Ram 16 Gb</span>
          <span className="block pb-5 text-purple-500 font-bold text-md">$1000</span>
        </div>
        </article>
      </div>
      {/* ========== Start content end ========= */}
    </>
  );
}
