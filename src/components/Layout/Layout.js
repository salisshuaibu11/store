import React, { useState } from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";

const Layout = (props) => {
  const [showSideBar, setShowSideBar] = useState(true);

  const SideBarToggleHandler = () => {
    setShowSideBar((prevState) => !prevState);
  };
  return (
    <>
      <SideBar show={showSideBar} />
      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <NavBar chevronClicked={SideBarToggleHandler} show={showSideBar} />
        <main className="flex-1 xl:p-4 px-20 max-h-full p-5 overflow-hidden overflow-y-scroll">
          {props.children}
        </main>
      </div>
    </>
  );
};

export default Layout;
