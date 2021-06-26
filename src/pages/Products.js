import Laptop from "../assets/images/laptop.png";

export default function Products() {
  return (
    <>
      <h2 className="font-bold text-xl mb-10">Products</h2>
      <div>
        <div className="mb-3">
          <button className="bg-purple-800 py-2 px-5 rounded-md text-white">
            All
          </button>
          <button className="py-2 px-5 rounded-md font-light">
            New Products
          </button>
          <button className="py-2 px-5 rounded-md font-light">
            Popular products
          </button>
          <button className="py-2 px-5 rounded-md font-light">
            High Compensations
          </button>
        </div>
        <div className="shadow-lg container py-4 bg-white rounded-md">
          <table className="w-full flex flex-row flex-no-wrap rounded-lg overflow-hidden sm:shadow-lg my-5">
            <thead className="border-b border-gray-800">
              <tr className="font-light space-x-10 text-gray-300 font-bold">
                <th className="text-left p-3">Product Name</th>
                <th className="text-left">Product Price</th>
                <th className="text-left">Commission Sales</th>
                <th className="text-left">Affliate Referral Link</th>
              </tr>
            </thead>
            <tbody className="w-full">
              <tr className="border-b border-gray-300 flex items-center justify-between bg-red-200">
                <td className="flex space-x-3 p-3">
                  <img className="rounded-full" src={Laptop} alt="Laptop" />
                  <div>
                    <span className="block font-bold">Laptop-AsusMX456GM</span>
                    <span className="block font-light">
                      Core i7 Gen 11, Ram 16 Gb
                    </span>
                  </div>
                </td>
                <td>$1000</td>
                <td>$250</td>
                <td className="relative">
                  <input
                    className="h-10 px-5 w-80 border border-gray-400 rounded-md outline-none"
                    type="text"
                    value="http://AsusMx/4548"
                    contentEditable={false}
                  />
                  <button className="bg-purple-800 rounded-tr-md rounded-br-md outline-none text-white p-2 px-5 relative top-0 right-24">
                    Copy Link
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="flex space-x-3 p-3">
                  <img className="rounded-full" src={Laptop} alt="Laptop" />
                  <div>
                    <span className="block font-bold">Laptop-AsusMX456GM</span>
                    <span className="block font-light">
                      Core i7 Gen 11, Ram 16 Gb
                    </span>
                  </div>
                </td>
                <td>$1000</td>
                <td>$250</td>
                <td className="relative">
                  <input
                    className="h-10 px-5 w-80 border border-gray-400 rounded-md outline-none"
                    type="text"
                    value="http://AsusMx/4548"
                    contentEditable={false}
                  />
                  <button className="bg-purple-800 rounded-tr-md rounded-br-md outline-none text-white p-2 px-5 absolute right-12">
                    Copy Link
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="flex space-x-3 p-3">
                  <img className="rounded-full" src={Laptop} alt="Laptop" />
                  <div>
                    <span className="block font-bold">Laptop-AsusMX456GM</span>
                    <span className="block font-light">
                      Core i7 Gen 11, Ram 16 Gb
                    </span>
                  </div>
                </td>
                <td>$1000</td>
                <td>$250</td>
                <td className="relative">
                  <input
                    className="h-10 px-5 w-80 border border-gray-400 rounded-md outline-none"
                    type="text"
                    value="http://AsusMx/4548"
                    contentEditable={false}
                  />
                  <button className="bg-purple-800 rounded-tr-md rounded-br-md outline-none text-white p-2 px-5 absolute right-12">
                    Copy Link
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="flex space-x-3 p-3">
                  <img className="rounded-full" src={Laptop} alt="Laptop" />
                  <div>
                    <span className="block font-bold">Laptop-AsusMX456GM</span>
                    <span className="block font-light">
                      Core i7 Gen 11, Ram 16 Gb
                    </span>
                  </div>
                </td>
                <td>$1000</td>
                <td>$250</td>
                <td className="relative">
                  <input
                    className="h-10 px-5 w-80 border border-gray-400 rounded-md outline-none"
                    type="text"
                    value="http://AsusMx/4548"
                    contentEditable={false}
                  />
                  <button className="bg-purple-800 rounded-tr-md rounded-br-md outline-none text-white p-2 px-5 absolute right-12">
                    Copy Link
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="flex space-x-3 p-3">
                  <img className="rounded-full" src={Laptop} alt="Laptop" />
                  <div>
                    <span className="block font-bold">Laptop-AsusMX456GM</span>
                    <span className="block font-light">
                      Core i7 Gen 11, Ram 16 Gb
                    </span>
                  </div>
                </td>
                <td>$1000</td>
                <td>$250</td>
                <td className="relative">
                  <input
                    className="h-10 px-5 w-80 border border-gray-400 rounded-md outline-none"
                    type="text"
                    value="http://AsusMx/4548"
                    contentEditable={false}
                  />
                  <button className="bg-purple-800 rounded-tr-md rounded-br-md outline-none text-white p-2 px-5 absolute right-12">
                    Copy Link
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="flex space-x-3 p-3">
                  <img className="rounded-full" src={Laptop} alt="Laptop" />
                  <div>
                    <span className="block font-bold">Laptop-AsusMX456GM</span>
                    <span className="block font-light">
                      Core i7 Gen 11, Ram 16 Gb
                    </span>
                  </div>
                </td>
                <td>$1000</td>
                <td>$250</td>
                <td className="relative">
                  <input
                    className="h-10 px-5 w-80 border border-gray-400 rounded-md outline-none"
                    type="text"
                    value="http://AsusMx/4548"
                    contentEditable={false}
                  />
                  <button className="bg-purple-800 rounded-tr-md rounded-br-md outline-none text-white p-2 px-5 absolute right-12">
                    Copy Link
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
