import React from "react";

function AuthHeader() {
  return (
    <div className="mt-24 relative">
      <div className="bg-customGreen h-3"></div>
      <div className="bg-customBlue h-3"></div>
      <div className="text-5xl leading-tight text-center font-Akshar font-bold bg-[#f7faf2] shadow-md p-10 px-36 mt-12 inline-block absolute translate-x-[-50%] translate-y-[-50%] -top-1/2 left-1/2">
        <h1 className="text-customGreen">TELEDENTISTRY</h1>
        <h1 className="text-customBlue">INCEMOTIN</h1>
      </div>
    </div>
  );
}

export default AuthHeader;
