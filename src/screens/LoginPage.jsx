import React, { useRef, useState } from "react";
import AuthHeader from "../Layout/AuthHeader";
import hubIcon from "../assets/icons/hub.png";
import dentistIcon from "../assets/icons/dentist.png";
import hubIconActive from "../assets/icons/hubActive.png";
import dentistIconActive from "../assets/icons/dentistActive.png";
import "./styles/Login.css";
import HubLogin from "../components/HubLogin";
import DentistlogIn from "../components/DentistlogIn";
function LoginPage() {
  const [tabID, setTabId] = useState(2);
  const ToggleTab = (newTabID) => {
    setTabId(newTabID);
  };
  return (
    <div>
      <AuthHeader />
      <section className="h-svh flex justify-center items-center font-robotoCondensed font-medium bg-[#f7faf2]">
        <form className="rounded-xl overflow-hidden shadow-xl inline-block pb-5">
          <div className="flex bg-[#E5E5E5] h-16 cursor-pointer">
            <div
              onClick={() => ToggleTab(1)}
              className={`flex basis-1/2 gap-3 justify-center items-center ${
                tabID == 1 && "tab-active"
              }`}
            >
              <img src={tabID == 1 ? hubIconActive : hubIcon} />
              <span className="block">For Hubs</span>
            </div>
            <div
              onClick={() => ToggleTab(2)}
              className={`flex basis-1/2 gap-3 justify-center items-center ${
                tabID == 2 && "tab-active"
              }`}
            >
              <img src={tabID == 2 ? dentistIconActive : dentistIcon} />
              <span className="block">For Dentist</span>
            </div>
          </div>
          {tabID == 1 ? <HubLogin /> : <DentistlogIn />}

          <p className="text-center text-[#8F8B8B]">
            Trobule logging in?{" "}
            <a className="underline" href="#">
              Reset credentials
            </a>
          </p>
        </form>
      </section>
    </div>
  );
}

export default LoginPage;
