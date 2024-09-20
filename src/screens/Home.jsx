import React from "react";
import Header from "../common/Header";
import WrapperLayout from "../Layout/WrapperLayout";
import register from "../assets/icons/register.png";
import patient from "../assets/icons/patient.png";
import appointmentbig from "../assets/icons/appointmentbig.png";
import history from "../assets/icons/history.png";
import recorder from "../assets/icons/recorder.png";

function Home() {
  const quickAction = [
    {
      icon: register,
      description: "Register New Patients",
    },
    {
      icon: patient,
      description: "All Patient Records",
    },
    {
      icon: appointmentbig,
      description: "Appointment Queue",
    },
    {
      icon: history,
      description: "Consultation History",
    },
    {
      icon: recorder,
      description: "Start Consultation",
    },
  ];
  return (
    <>
      <Header />
      <section>
        <WrapperLayout>
          <div>
            <h2 className="font-robotoCondensed font-bold my-5 mt-8 text-2xl">
              TODAY STATS
            </h2>
            <div className="flex gap-8">
              <div className=" py-6 px-6 bg-[#CFEAF6] pr-20 shadow-sm  rounded-2xl">
                <h2 className="font-medium text-xl">All Patients</h2>
                <h1 className="font-bold text-4xl my-2 mb-4">23</h1>
                <div className="text-[#626E74] text-lg">
                  <p>New Patients: 12</p>
                </div>
              </div>

              <div className="py-6 px-6 bg-[#CFEAF6] pr-20 shadow-sm rounded-2xl">
                <h2 className="font-medium text-xl">Appointment in Queue</h2>
                <h1 className="font-bold text-4xl my-2 mb-4">20</h1>
                <div className="text-[#626E74] text-lg">
                  <p>Completed Appointment: 3</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="font-robotoCondensed font-bold my-5 mt-8 text-2xl">
              QUICK ACTIONS
            </h2>
            <div className="grid grid-cols-3 max-w-[600px] gap-6">
              {quickAction.map((action, id) => {
                return (
                  <a href="#">
                    {" "}
                    <div
                      key={id}
                      className="flex flex-col items-center justify-center border-2 rounded-lg gap-4 px-10 py-6 hover:shadow-md"
                    >
                      <img src={action.icon} />
                      <p className="text-center">{action.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </WrapperLayout>
      </section>
    </>
  );
}

export default Home;
