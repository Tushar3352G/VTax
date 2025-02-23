import { useState, useEffect } from "react";
import data from "app/content/services.json";

const VerticalTabs = ({ onServiceSelect }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [showCategoryBox, setShowCategoryBox] = useState(false);
  const [showContentBox, setShowContentBox] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isServiceLoaded, setIsServiceLoaded] = useState(false); 

  useEffect(() => {
    const storedService = localStorage.getItem("service");
    if (storedService) {
      setSelectedService(storedService);
    }
    setIsServiceLoaded(true); 
  }, [selectedService]);

  const tabs = data.map((items, key) => ({
    id: `tab${key + 1}`,
    title: items.section,
    services: items.services.map((items) => items.title),
  }));

  useEffect(() => {
    if (isServiceLoaded && selectedService) {
      onServiceSelect(selectedService); 
    }
  }, [isServiceLoaded, selectedService, onServiceSelect]);

  return (
    <div className="w-full cursor-pointer">
      <div
        onClick={() => {
          setShowCategoryBox(true);
        }}
        className="cursor-pointer bg-zinc-100 hover:bg-zinc-200 linear duration-300 h-14 text-base rounded-lg md:rounded-xl px-5 outline-blue-200 w-full flex items-center"
      >
        <input
          type="text"
          readOnly
          value={selectedService}
          placeholder="Select a service*"
          className="w-full h-full outline-none cursor-pointer"
        />
        <svg
          width="20"
          height="10"
          viewBox="0 0 20 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 1L10 9L1 1"
            stroke="#3F3F46"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {showCategoryBox && (
        <div className="fixed z-50 inset-0 bg-zinc-900/20 p-2 md:p-6 grid place-items-center">
          <div className="w-full relative md:w-[30rem] bg-white rounded-xl overflow-y-scroll h-[40rem] md:h-[45rem]">
            <div className="w-full bg-white sticky mb-5 top-0 px-4 py-2">
              <span
                className="cursor-pointer px-2 gap-2 text-base font-medium font-[Poppins] py-2 flex items-center w-fit bg-blue-200 hover:bg-blue-300 rounded-lg"
                onClick={() => setShowCategoryBox(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-undo-2"
                >
                  <path d="M9 14 4 9l5-5" />
                  <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
                </svg>
                Back
              </span>
            </div>
            <div className="w-full px-4 pb-3">
              {tabs.map((tab) => (
                <span
                  key={tab.id}
                  className="block w-full text-left py-3 px-3 bg-gray-100 hover:bg-blue-200 mb-3 rounded-lg cursor-pointer"
                  onClick={() => {
                    setActiveTab(tab.id);
                    setShowContentBox(true);
                  }}
                >
                  {tab.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {showContentBox && activeTab && (
        <div className="fixed inset-0 z-60 bg-zinc-900/20 p-6 grid place-items-center">
          <div className="w-full md:w-[30rem] bg-white rounded-xl overflow-y-scroll h-[40rem] md:h-[45rem]">
            <div className="w-full bg-white sticky mb-5 top-0 px-4 py-2">
              <span
                className="px-2 gap-2 text-base font-medium font-[Poppins] cursor-pointer py-2 flex items-center w-fit bg-blue-200 hover:bg-blue-300 rounded-lg"
                onClick={() => setShowContentBox(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-undo-2"
                >
                  <path d="M9 14 4 9l5-5" />
                  <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
                </svg>
                Back
              </span>
            </div>
            <div className="w-full px-4 pb-3">
              {tabs.map((tab) =>
                activeTab === tab.id ? (
                  <div key={tab.id}>
                    <div className="flex flex-col gap-2">
                      {tab.services.map((service) => (
                        <span
                          key={service}
                          className="px-4 py-2 font-[Poppins] cursor-pointer bg-gray-100 hover:bg-blue-200 rounded-lg"
                          onClick={() => {
                            setSelectedService(service);
                            localStorage.setItem("service", service); // ✅ Service save karne ke liye
                            setShowCategoryBox(false);
                            setShowContentBox(false);
                          }}
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerticalTabs;
