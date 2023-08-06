import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faTrain,
  faShip,
  faCar,
  faCalendar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Tab = ({ title, activeTab, onClick }) => {
  const tabIcons = {
    flight: faPlane,
    trains: faTrain,
    ship: faShip,
    cars: faCar,
  };

  return (
    <button
      className={`h-12 w-full  ${
        activeTab === title
          ? "bg-blue-500 text-white"
          : "bg-white-500 text-black"
      }`}
      onClick={() => onClick(title)}
      style={{
        background: activeTab === title ? "#74c684" : "#ffffff",
      }}
    >
      <FontAwesomeIcon icon={tabIcons[title]} className="mr-1" />
      {title}
    </button>
  );
};

const App = () => {
  const [activeIcon, setActiveIcon] = useState(1);

  const IconWithBackground = ({ children, isActive }) => (
    <div
      className={`p-1 rounded-lg ${isActive ? "bg-blue-500" : "bg-gray-300"}`}
    >
      {children}
    </div>
  );

  const handleIconClick = (direction) => {
    if (direction === "left") {
      setActiveIcon((prevIcon) => (prevIcon > 1 ? prevIcon - 1 : 1));
    } else if (direction === "right") {
      setActiveIcon((prevIcon) => (prevIcon < 3 ? prevIcon + 1 : 3));
    }
  };

  const [activeTab, setActiveTab] = useState("flight");

  const handleTabClick = (title) => {
    setActiveTab(title);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full"
      style={{
        background:
          "linear-gradient(120deg, #c9d0e3 0%, #c9d0e3 50%, #9aa4bd 50%, #9aa4bd 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="w-full bg-f3f6fd  flex"
        style={{ marginLeft: "60px", marginRight: "60px" }}
      >
        <div
          className="w-1/3"
          style={{ background: "#e9f0f8", height: "80vh" }}
        >
          <h6 className="text-blue-500">Ticket4U</h6>
          <div className="flex space-x-4 m-2  ">
            <Tab
              className=""
              title="flight"
              activeTab={activeTab}
              onClick={handleTabClick}
            />
            <Tab
              title="trains"
              activeTab={activeTab}
              onClick={handleTabClick}
            />
            <Tab title="ship" activeTab={activeTab} onClick={handleTabClick} />
            <Tab title="cars" activeTab={activeTab} onClick={handleTabClick} />
          </div>
          <p className="text-gray-400">Best Flight Deals with</p>
          <h1 className="text-blue-500 font-bold">Ticket4U</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-2">
              <label className=" text-xs text-gray-400">Depart from</label>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faPlane}
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
                />
                <input
                  type="text"
                  className="w-full text-gray-400 px-4 py-2 border rounded-lg pl-10"
                  placeholder="London - All airport England-UK"
                />
              </div>
            </div>
            <div className="mb-2">
              <label className=" text-xs text-gray-400">Arrive at</label>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faPlane}
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
                />
                <input
                  type="text"
                  className="w-full px-4 text-gray-400 py-2 border rounded-lg pl-10"
                  placeholder="New York - All airport New york USA"
                />
              </div>
            </div>
            <div className="mb-2 flex">
              <div className="w-1/2">
                <label className="text-xs text-gray-400">Departure Date</label>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
                  />
                  <input
                    type="date"
                    className="w-full px-4 py-2 border rounded-lg text-gray-400 pl-10"
                    placeholder="Today's Date"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <label className="text-xs text-gray-400">Return Date</label>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
                  />
                  <input
                    type="date"
                    className="w-full px-4 py-2 border rounded-lg text-gray-400 pl-10"
                    placeholder="Today's Date"
                  />
                </div>
              </div>
            </div>

            <div className="mb-2 flex">
              <div className="w-1/2">
                <label className="text-xs text-gray-400">Class</label>
                <div className="flex items-center">
                  <select className="w-full px-4 py-2 text-gray-400 border rounded-lg pl-10">
                    <FontAwesomeIcon
                      icon={faPlane}
                      className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
                    />
                    <option placeholder="Economy">Economy</option>
                    <option placeholder="Business">Business</option>
                    <option placeholder="First Class">First Class</option>
                  </select>
                </div>
              </div>
              <div className="w-1/2">
                <label className="text-xs text-gray-400">Passengers</label>
                <div className="flex items-center">
                  <select className="w-3/4 px-4 py-2 border rounded-lg text-gray-400 pl-10">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
                    />
                    <option placeholder="1">1</option>
                    <option placeholder="2">2</option>
                    <option placeholder="3">3</option>
                    <option placeholder="4">4</option>
                    <option placeholder="5">5</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg"
              id="find-flight"
            >
              Find Flight
            </button>
          </form>
        </div>
        <div
          className="w-full"
          style={{ backgroundColor: "#f3f6fd", height: "80vh" }}
        >
          <div className="bg-e9f0f8 p-4 w-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl">Search results</h2>
              <div className="flex">
                <div className="relative w-full">
                  <input
                    type="text"
                    className={`w-40 px-4 py-2 border rounded-full ${
                      activeTab === "CHEAPEST"
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black"
                    }`}
                    placeholder="CHEAPEST"
                  />
                </div>
                <div className="relative w-full">
                  <input
                    type="text"
                    className={`w-40 px-4 py-2 border rounded-full ${
                      activeTab === "SHORTEST"
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black"
                    }`}
                    placeholder="SHORTEST"
                  />
                </div>
                <div className="relative w-full">
                  <input
                    type="text"
                    className={`w-40 px-4 py-2 border rounded-full ${
                      activeTab === "RECOMMEND"
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black"
                    }`}
                    placeholder="RECOMMEND"
                  />
                </div>
              </div>
            </div>
          </div>
          <h2>
            London <i className="fa fa-arrow-right"></i> New York
          </h2>
          <div className="flex items-center bg-white-500 justify-between  border border-gray-300 rounded-lg">
              <div className="flex items-center">
                <img
                  src="./assets/brand.gif" // Replace with the path to your logo image
                  alt="Logo"
                  className="w-8 h-8 mr-4"
                />
                <div>
                  <p className="text-sm">Departure Time</p>
                  <p className="text-lg font-semibold">10:00 AM</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm">Arrival Time</p>
                <p className="text-lg font-semibold">12:00 PM</p>
              </div>
              <div>
                <p className="text-sm">Price</p>
                <p className="text-lg font-semibold">$200</p>
              </div>
            </div>
          <div className="flex items-center space-x-4">
            
            <IconWithBackground isActive={activeIcon === 1}>
              <ChevronLeftIcon
                className={`w-6 h-6 text-gray-500 cursor-pointer ${
                  activeIcon === 1 ? "text-white" : ""
                }`}
                onClick={() => handleIconClick("left")}
              />
            </IconWithBackground>
            <IconWithBackground isActive={activeIcon === 1}>
              1
            </IconWithBackground>
            <IconWithBackground isActive={activeIcon === 2}>
              2
            </IconWithBackground>
            <IconWithBackground isActive={activeIcon === 3}>
              3
            </IconWithBackground>
            <IconWithBackground isActive={activeIcon === 3}>
              <ChevronRightIcon
                className={`w-6 h-6 text-gray-500 cursor-pointer ${
                  activeIcon === 3 ? "text-white" : ""
                }`}
                onClick={() => handleIconClick("right")}
              />
            </IconWithBackground>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
