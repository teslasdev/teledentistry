import React from "react";

function HubLogin() {
  return (
    <div className="px-10 py-5">
      <div className="flex justify-center items-center gap-5 leading-9 my-6">
        <label htmlFor="Centre-ID">Centre ID</label>
        <div>
          <input
            id="Centre-ID"
            type="text"
            name="Centre-ID"
            className="block  border-2 rounded w-80 pl-3"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 leading-9 my-6">
        <label htmlFor="password">Password</label>
        <div>
          <input
            id="password"
            name="password"
            type="password"
            className="block  border-2 rounded w-80 pl-3"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button className="w-[70%] bg-customBlue py-4 rounded-xl text-white  inward-slant">
          Login
        </button>
      </div>
    </div>
  );
}

export default HubLogin;
