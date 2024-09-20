import React from "react";
import message from "../assets/icons/message.png";
import appointmenticon from "../assets/icons/appointmenticon.png";
import cancel from "../assets/icons/cancel.png";
import live from "../assets/icons/broadcast.png";
import deleteicon from "../assets/icons/delete.png";
function HighlightDropdown() {
  const appointments = [
    {
      Title: "Tom Heaton",
      patientId: "Patient ID: 10002",
      reason: "Follow-up",
      detailsLink: "",
      presentStatus: "live",
    },
    {
      Title: "Tom Heaton",
      patientId: "Patient ID: 10002",
      reason: "Emergency",
      detailsLink: "",
      presentStatus: "Start",
    },
    {
      Title: "Tom Heaton",
      patientId: "Patient ID: 10002",
      reason: "Emergency",
      detailsLink: "",
      presentStatus: "Start",
    },
    {
      Title: "Tom Heaton",
      patientId: "Patient ID: 10002",
      reason: "Emergency",
      detailsLink: "",
      presentStatus: "Start",
    },
    {
      Title: "Tom Heaton",
      patientId: "Patient ID: 10002",
      reason: "Emergency",
      detailsLink: "",
      presentStatus: "Start",
    },
    {
      Title: "Tom Heaton",
      patientId: "Patient ID: 10002",
      reason: "Emergency",
      detailsLink: "",
      presentStatus: "Start",
    },
    {
      Title: "Tom Heaton",
      patientId: "Patient ID: 10002",
      reason: "Emergency",
      detailsLink: "",
      presentStatus: "Start",
    },
  ];
  return (
    <div className="font-Inter absolute right-0 ">
      <div className="relative ">
        <div className="flex gap-3 absolute  translate-y-[-50%] right-0 top-full  ">
          <div className="bg-customBlue rounded-full p-4 inline-block cursor-pointer shadow-sm  hover:shadow-lg">
            <img src={message} />
          </div>
          <div
            className="
            bg-white
            rounded-full
            p-4
            inline-block
            cursor-pointer
            shadow-sm
            hover:shadow-lg"
          >
            <img src={appointmenticon} />
          </div>
        </div>
      </div>

      <div className="w-96 relative mt-10 shadow-lg rounded-xl bg-white  border-[1px] p-4 ">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-medium "> Upcoming Appointment(20) </h2>
          <div className="flex items-center">
            {" "}
            <img className="block cursor-pointer" src={cancel} />{" "}
          </div>
        </div>
        {/*       // Hightlight dropdown content */}
        <div className="max-h-[70svh] overflow-scroll">
          {appointments.map((appointment, id) => {
            return (
              <div
                className={`py-6 px-6  mb-3 shadow-sm  rounded-2xl ${
                  appointment.presentStatus == "live"
                    ? "bg-[#CFEAF6]"
                    : "bg-[#F0F0F0]"
                }`}
              >
                <div className="flex justify-between">
                  {" "}
                  <h2 className="font-medium">{appointment.Title}</h2>
                  <div>
                    {appointment.presentStatus == "live" ? (
                      <img src={live} />
                    ) : (
                      <button className="bg-customBlue text-white p-1 px-4 rounded-lg  text-sm">
                        START
                      </button>
                    )}
                  </div>
                </div>
                <p className="text-sm font-extralight">
                  Patient ID:{appointment.patientId}
                </p>
                <p className="text-base font-semibold">
                  Reason: {appointment.reason}
                </p>
                <div className="flex justify-between">
                  <a
                    href={appointment.detailsLink}
                    className="text-customBlue underline underline-offset-2 text-sm"
                  >
                    View Details
                  </a>
                  <div>
                    <img src={deleteicon} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HighlightDropdown;
