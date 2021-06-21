import ClickIcon from "../assets/icons/click.svg";
import OrderIcon from "../assets/icons/product.svg";
import SalesIcon from "../assets/icons/sales.svg";
import CommissionIcon from "../assets/icons/commision_icon.svg";

import Laptop from "../assets/images/laptop.png";

import { EyeIcon, TrashIcon } from "@heroicons/react/outline";

export default function Reports() {
  return (
    <>
      {/* Main content header */}
      <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
        <h1 class="text-xl font-semibold whitespace-nowrap">Reports</h1>
      </div>

      {/* Start content */}
      <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start flex-col justify-between">
            <div className="flex space-x-3 items-center">
              <div className="bg-blue-500 flex justify-center items-center w-10 h-8 rounded-lg">
                <img src={ClickIcon} alt="How many clicked icon" />
              </div>
              <span className="text-lg font-semibold">click</span>
            </div>
            <span className="text-2xl ml-24">300</span>
          </div>
        </article>
        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start flex-col justify-between">
            <div className="flex space-x-3 items-center">
              <div className="bg-yellow-300 flex justify-center items-center w-10 h-8 rounded-lg">
                <img src={OrderIcon} alt="Order" />
              </div>
              <span className="text-lg font-semibold">Order</span>
            </div>
            <span className="text-2xl ml-24">175</span>
          </div>
        </article>
        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start flex-col justify-between">
            <div className="flex space-x-3 items-center">
              <div className="bg-blue-600 flex justify-center items-center w-10 h-8 rounded-lg">
                <img src={SalesIcon} alt="How many clicked icon" />
              </div>
              <span className="text-lg font-semibold">Total Sales</span>
            </div>
            <span className="text-2xl ml-24">88</span>
          </div>
        </article>
        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start flex-col justify-between">
            <div className="flex space-x-3 items-center">
              <img src={CommissionIcon} alt="How many clicked icon" />
              <span className="text-lg font-semibold">Commission</span>
            </div>
            <span className="text-2xl ml-24">$8,777</span>
          </div>
        </article>
        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start flex-col justify-between">
            <div className="flex space-x-3 items-center">
              <img src={CommissionIcon} alt="How many clicked icon" />
              <span className="text-lg font-semibold">Commission</span>
            </div>
            <span className="text-2xl ml-24">$8,777</span>
          </div>
        </article>
        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start flex-col justify-between">
            <div className="flex space-x-3 items-center">
              <img src={CommissionIcon} alt="How many clicked icon" />
              <span className="text-lg font-semibold">Commission</span>
            </div>
            <span className="text-2xl ml-24">$8,777</span>
          </div>
        </article>
        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start flex-col justify-between">
            <div className="flex space-x-3 items-center">
              <img src={CommissionIcon} alt="How many clicked icon" />
              <span className="text-lg font-semibold">Commission</span>
            </div>
            <span className="text-2xl ml-24">$8,777</span>
          </div>
        </article>
        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start flex-col justify-between">
            <div className="flex space-x-3 items-center">
              <img src={CommissionIcon} alt="How many clicked icon" />
              <span className="text-lg font-semibold">Commission</span>
            </div>
            <span className="text-2xl ml-24">$8,777</span>
          </div>
        </article>
      </div>
      {/* ========== Start content end ========= */}

      {/* ========== Detail Order ========== */}
      <div>
        <span className="text-xl mt-5 block">Product Sale Details</span>
        <div className="shadow-lg py-4 bg-white rounded-md flex flex-col">
          <select className="outline-none mt-2 mb-5 ml-5 border border-blue-600 rounded-md py-2 px-4 w-48 bg-white">
            <option value="Seven Days">Last 7 Days</option>
          </select>
          <div>
            <table className="h-64 w-full mb-5">
              <thead className="border-b border-gray-400">
                <tr>
                  <th>Active Products</th>
                  <th>Total Click</th>
                  <th>Total Order</th>
                  <th>Total Commisions</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="flex space-x-3 pl-5">
                    <img className="rounded-full" src={Laptop} alt="Laptop" />
                    <div>
                      <span className="block font-bold">
                        Laptop-AsusMX456GM
                      </span>
                      <span className="block font-light">
                        Core i7 Gen 11, Ram 16 Gb
                      </span>
                    </div>
                  </td>
                  <td>300</td>
                  <td>1500</td>
                  <td>$6000</td>
                  <td className="space-x-5 flex items-center">
                    <EyeIcon width={20} className="cursor-pointer" />
                    <TrashIcon
                      width={20}
                      className="text-red-500 cursor-pointer"
                    />
                  </td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="flex space-x-3 pl-5">
                    <img className="rounded-full" src={Laptop} alt="Laptop" />
                    <div>
                      <span className="block font-bold">
                        Laptop-AsusMX456GM
                      </span>
                      <span className="block font-light">
                        Core i7 Gen 11, Ram 16 Gb
                      </span>
                    </div>
                  </td>
                  <td>300</td>
                  <td>1500</td>
                  <td>$6000</td>
                  <td className="space-x-5 flex items-center">
                    <EyeIcon width={20} className="cursor-pointer" />
                    <TrashIcon
                      width={20}
                      className="text-red-500 cursor-pointer"
                    />
                  </td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="flex space-x-3 pl-5">
                    <img className="rounded-full" src={Laptop} alt="Laptop" />
                    <div>
                      <span className="block font-bold">
                        Laptop-AsusMX456GM
                      </span>
                      <span className="block font-light">
                        Core i7 Gen 11, Ram 16 Gb
                      </span>
                    </div>
                  </td>
                  <td>300</td>
                  <td>1500</td>
                  <td>$6000</td>
                  <td className="space-x-5 flex items-center">
                    <EyeIcon width={20} className="cursor-pointer" />
                    <TrashIcon
                      width={20}
                      className="text-red-500 cursor-pointer"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="bg-blue-600 self-center py-2 px-4 rounded-md outline-none text-white">
            View All
          </button>
        </div>
      </div>
      {/* ========== Detail Order End ========== */}
    </>
  );
}
