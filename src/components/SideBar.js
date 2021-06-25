import { NavLink } from "react-router-dom";

import {
  ChevronDoubleLeftIcon,
  TrendingUpIcon,
  UserAddIcon,
  ViewGridIcon,
  CreditCardIcon,
} from "@heroicons/react/outline";

// initial width = 64

function SideBar({ show }) {
  return (
    <aside
      className={`fixed bg-white inset-y-0 z-10 flex flex-col flex-shrink-0 ${
        show ? "w-64" : "w-14"
      } max-h-screen overflow-hidden transition-all transform border-r shadow-lg lg:z-auto lg:static lg:shadow-none`}
    >
      <div className="flex items-center justify-between flex-shrink-0 p-2">
        <span className="p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap">
          <span>{show ? "Affliate" : "AF"}</span>
        </span>
        <button className="p-2 z-50 rounded-md lg:hidden">
          <ChevronDoubleLeftIcon />
        </button>
      </div>

      <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
        <ul className="p-2 overflow-hidden">
          <li>
            <NavLink
              to="/"
              className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
            >
              <span>
                <ViewGridIcon width={25} />
              </span>
              <span className={`${show ? "block" : "hidden"}`}>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
            >
              <span>
                <ViewGridIcon width={25} />
              </span>
              <span className={`${show ? "block" : "hidden"}`}>Products</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/reports"
              className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
            >
              <span>
                <TrendingUpIcon width={25} />
              </span>
              <span className={`${show ? "block" : "hidden"}`}>Reports</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/invitation"
              className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
            >
              <span>
                <UserAddIcon width={25} />
              </span>
              <span className={`${show ? "block" : "hidden"}`}>Invitation</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/payment"
              className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
            >
              <span>
                <CreditCardIcon width={25} />
              </span>
              <span className={`${show ? "block" : "hidden"}`}>Payment</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
