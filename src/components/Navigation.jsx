import React, { useEffect, useState } from "react";

import patient from "../assets/icons/persons.png";
import appoint from "../assets/icons/appointment.png";
import homeActive from "../assets/icons/homeActive.png";
import { Link, useLocation } from "react-router-dom";
function Navigation() {
  const [currentUrl, setCurrentUrl] = useState("/"); //default is at home page
  const navigation = [
    {
      icon: homeActive,
      activeIcon: homeActive,
      label: "Home",
      link: "/",
    },
    {
      icon: patient,
      activeIcon: patient,
      label: "Patients",
      link: "/patients",
    },

    {
      icon: appoint,
      activeIcon: appoint,
      label: "Appointments",
      link: "/appointments",
    },
  ];
  const location = useLocation();
  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location.pathname]);

  return (
    <ul className="flex basis-[45%] font-roboto text-lg">
      {navigation.map((e, index) => {
        return (
          <li
            className={`${
              currentUrl == e.link && "bg-customBlue text-white"
            } flex w-1/3 gap-2 hover:bg-customBlue border-[1px] border-l-0 `}
          >
            <Link
              to={e.link}
              className="flex w-full items-center justify-center py-4 gap-3 px-3 hover:text-white"
            >
              <span>
                <img className="block" src={e.icon} />
              </span>
              <span>{e.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Navigation;
