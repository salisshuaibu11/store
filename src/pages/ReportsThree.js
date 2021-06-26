// import TotalProductIcon from "../assets/icons/product.svg";
// import TotalOrderIcon from "../assets/icons/product.svg";
// import TotalSalesIcon from "../assets/icons/success.svg";
// import TotalPendingIcon from "../assets/icons/pending.svg";
// import TotalCancelIcon from "../assets/icons/cancel.svg";
// import TotalWithdrawIcon from "../assets/icons/withdraw.svg";
// import TotalPendingWithdrawIcon from "../assets/icons/pendingWithdraw.svg";
// import CommissionIcon from "../assets/icons/commision_icon.svg";

import Laptop from "../assets/images/laptop.png";

//import { EyeIcon, TrashIcon } from "@heroicons/react/outline";

export default function ReportsThree() {
  return (
    <>

      {/* ========== Detail Order ========== */}
      <div>
        <span className="text-lg font-bold my-5 block">Total Order</span>
        <div className="shadow-lg py-4 bg-white rounded-md flex flex-col">
          <h3 className="text-purple-800 text-center mb-5 font-extrabold">"182 Products data found"</h3>
          <select className="outline-none mt-2 mb-5 ml-5 border border-blue-600 rounded-md py-2 px-4 w-48 bg-white">
            <option value="Seven Days">Show Last 7 Days</option>
          </select>
          <div>
            <table className="h-64 w-full mb-5 font-bold">
              <thead className="border-b border-gray-400 text-gray-500 font-thin">
                <tr>
                  <th className="text-left pl-6">Active Products</th>
                  <th className="text-left">Date</th>
                  <th className="text-left">Total Order</th>
                  <th className="text-left">Total Commisions</th>
                  <th className="text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="flex space-x-3 p-3">
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
                  <td>14, June 2021</td>
                  <td>1500</td>
                  <td>$6000</td>
                  <td>
                    <button className="text-white bg-purple-800 px-4 py-1 rounded-lg">Success</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="flex space-x-3 p-3">
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
                  <td>14, June 2021</td>
                  <td>1500</td>
                  <td>$6000</td>
                  <td>
                    <button className="text-white bg-red-500 px-4 py-1 rounded-lg">Canceled</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="flex space-x-3 p-3">
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
                  <td>14, June 2021</td>
                  <td>1500</td>
                  <td>$6000</td>
                  <td>
                    <button className="text-white bg-yellow-300 px-4 py-1 rounded-lg">Pending</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="bg-purple-800 self-center py-2 px-4 rounded-md outline-none text-white">
            View All
          </button>
        </div>
      </div>
      {/* ========== Detail Order End ========== */}
    </>
  );
}
