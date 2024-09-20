import React from "react";
import Navigation from "../components/Navigation";
import WrapperLayout from "../Layout/WrapperLayout";

import HighlightDropdown from "../components/HighlightDropdown";

function Header() {
  return (
    <>
      <WrapperLayout>
        <div className="flex justify-between items-center pt-6 py-2">
          <div className="text-3xl leading-tight font-Akshar font-bold ">
            <h1 className="text-customGreen">TELEDENTISTRY</h1>
            <h1 className="text-customBlue">INCEMOTIN</h1>
          </div>
          <Navigation />

          <div className="text-right text-2xl font-robotoCondensed text-[#626E74]">
            <h2>Hub 0123</h2>
            <h2>23, Health Centre, OAU, Ife</h2>
          </div>
        </div>
      </WrapperLayout>
      <div className="bg-[#CFEAF6]">
        <WrapperLayout>
          <div className="relative">
            <h1 className="text-[#7C8A90] text-3xl font-robotoCondensed font-bold py-3">
              HOME
            </h1>
            <HighlightDropdown />
          </div>
        </WrapperLayout>
      </div>
    </>
  );
}

export default Header;
