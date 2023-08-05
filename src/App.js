import React, { useState } from "react";

const Tab = ({ title, activeTab, onClick }) => {
  return (
    <button
      className={`px-4 py-2 ${
        activeTab === title ? "bg-blue-500 text-white" : "bg-f3f6fd text-black"
      }`}
      onClick={() => onClick(title)}
    >
      {title}
    </button>
  );
};

const TabContent = ({ activeTab }) => {
  if (activeTab === "Tab 1") {
    return (
      <div className="bg-e9f0f8 p-4 w-100">
        <h2>Tab 1 Content</h2>
        {/* Add your content for Tab 1 here */}
      </div>
    );
  } else if (activeTab === "Tab 2") {
    return (
      <div className="bg-e9f0f8 p-4 w-80">
        <h2>Tab 2 Content</h2>
        {/* Add your content for Tab 2 here */}
      </div>
    );
  } else if (activeTab === "Tab 3") {
    return (
      <div className="bg-e9f0f8 p-4 w-100">
        <h2>Tab 3 Content</h2>
        {/* Add your content for Tab 3 here */}
      </div>
    );
  }
};

const App = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");

  return (
    <div
      className="fixed top-0 left-0 w-full h-full"
      style={{
        background: "linear-gradient(120deg, #c9d0e3 0%, #c9d0e3 50%, #9aa4bd 50%, #9aa4bd 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="w-full bg-f3f6fd  flex"
        style={{ marginLeft: "60px", marginRight: "60px" }}
      >
        <div className="w-1/3" style={{background: "#e9f0f8",height: "70vh",}}>
          <h1>Tabs</h1>
          <div className="flex space-x-4">
            <Tab
              title="Tab 1"
              activeTab={activeTab}
              onClick={(title) => setActiveTab(title)}
            />
            <Tab
              title="Tab 2"
              activeTab={activeTab}
              onClick={(title) => setActiveTab(title)}
            />
            <Tab
              title="Tab 3"
              activeTab={activeTab}
              onClick={(title) => setActiveTab(title)}
            />
          </div>
        </div>
        <div className="w-2/3" style={{background: "#f3f6fd", height: "70vh"}}>
          <TabContent activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default App;
