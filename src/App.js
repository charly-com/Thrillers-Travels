import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faTrain, faShip, faCar, faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";

const Tab = ({ title, activeTab, onClick }) => {
  const tabIcons = {
    "Tab 1": faPlane,
    "Tab 2": faTrain,
    "Tab 3": faShip,
    "Tab 4": faCar,
  };

  return (
    <button
      className={`px-4 py-2 ${
        activeTab === title ? "bg-blue-500 text-white" : "bg-white-500 text-black"
      }`}
      onClick={() => onClick(title)}
      style={{
        background: activeTab === title ? "#74c684" : "#ffffff",
      }}
    >
      <FontAwesomeIcon
        icon={tabIcons[title]}
        className="mr-2"
      />
      {title}
    </button>
  );
};

const TabContent = ({ activeTab, formValues, onChange }) => {
  if (activeTab === "Tab 1") {
    return (
      <div className="bg-e9f0f8 p-4 w-100">
        <h2>Search results</h2>
        {/* Add your content for Tab 1 here */}
      </div>
    );
  } else if (activeTab === "Tab 2") {
    return (
      <div className="bg-e9f0f8 p-4 w-80">
        <h2>Search results</h2>

        {/* Add your content for Tab 2 here */}
      </div>
    );
  } else if (activeTab === "Tab 3") {
    return (
      <div className="bg-e9f0f8 p-4 w-100">
        <h2>Search results</h2>
        {/* Add your content for Tab 3 here */}
      </div>
    );
  } else if (activeTab === "Tab 4") {
    return (
      <div className="bg-e9f0f8 p-4 w-100">
        <h2>Search results</h2>
        {/* Add your content for Tab 4 here */}
      </div>
    );
  }
};

const App = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const [formValues, setFormValues] = useState({});

  const handleTabClick = (title) => {
    setActiveTab(title);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Process the form values and update the content accordingly
    // For this example, we'll just update the formValues state with the form data
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    setFormValues(data);
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
          style={{ background: "#e9f0f8", height: "70vh" }}
        >
          <h1>Ticket4U</h1>
          <div className="flex space-x-4">
            <Tab title="Tab 1" activeTab={activeTab} onClick={handleTabClick} />
            <Tab title="Tab 2" activeTab={activeTab} onClick={handleTabClick} />
            <Tab title="Tab 3" activeTab={activeTab} onClick={handleTabClick} />
            <Tab title="Tab 4" activeTab={activeTab} onClick={handleTabClick} />
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label className="block text-xl">Depart Time</label>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faPlane}
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
                />
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg pl-10"
                  placeholder="London - All airport England-UK"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xl">Arrive Time</label>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faPlane}
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
                />
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg pl-10"
                  placeholder="New York - All airport New york USA"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xl">Departure Date</label>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
                />
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-lg pl-10"
                  placeholder="Today's Date"
                />
              </div>
              <label className="block text-xl">Return Date</label>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
                />
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-lg pl-10"
                  placeholder="Today's Date"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xl">Class</label>
              <div className="flex items-center">
                <select className="w-full px-4 py-2 border rounded-lg pl-10">
                  <FontAwesomeIcon
                    icon={faPlane}
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
                  />
                  <option placeholder="Economy">Economy</option>
                  <option placeholder="Business">Business</option>
                  <option placeholder="First Class">First Class</option>
                </select>
              </div>
              <label className="block text-xl">Passengers</label>
              <div className="flex items-center">
                <select className="w-full px-4 py-2 border rounded-lg pl-10">
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
          className="w-2/3"
          style={{ backgroundColor: "#f3f6fd", height: "70vh" }}
        >
          <TabContent
            activeTab={activeTab}
            formValues={formValues}
            onChange={handleFormSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
