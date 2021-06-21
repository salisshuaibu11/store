import Laptop from "../assets/images/laptop.png";

export default function Products() {
  return (
    <>
      <h2 className="font-bold text-xl mb-10">Products</h2>
      <div>
        <div className="mb-3">
          <button className="bg-blue-600 py-2 px-5 rounded-md text-white">
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
        <div className="shadow-lg w-full py-4 bg-white rounded-md">
          <table className="w-full mb-5">
            <thead className="border-b border-gray-400">
              <tr className="font-light">
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Commission Sales</th>
                <th>Affliate Referral Link</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="flex space-x-3 pl-5">
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
                  <button className="bg-blue-600 rounded-tr-md rounded-br-md outline-none text-white p-2 px-5 absolute right-12">
                    Copy Link
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="flex space-x-3 pl-5">
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
                  <button className="bg-blue-600 rounded-tr-md rounded-br-md outline-none text-white p-2 px-5 absolute right-12">
                    Copy Link
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="flex space-x-3 pl-5">
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
                  <button className="bg-blue-600 rounded-tr-md rounded-br-md outline-none text-white p-2 px-5 absolute right-12">
                    Copy Link
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="flex space-x-3 pl-5">
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
                  <button className="bg-blue-600 rounded-tr-md rounded-br-md outline-none text-white p-2 px-5 absolute right-12">
                    Copy Link
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="flex space-x-3 pl-5">
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
                  <button className="bg-blue-600 rounded-tr-md rounded-br-md outline-none text-white p-2 px-5 absolute right-12">
                    Copy Link
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="flex space-x-3 pl-5">
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
                  <button className="bg-blue-600 rounded-tr-md rounded-br-md outline-none text-white p-2 px-5 absolute right-12">
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
