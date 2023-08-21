import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function SearchBox() {
  const [country, setCountry] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [field, setField] = useState("");

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleEducationLevelChange = (e) => {
    setEducationLevel(e.target.value);
  };

  const handleFieldChange = (e) => {
    setField(e.target.value);
  };

  // Tab Styles
  const defaultStyle = {
    border: "1px solid #93215F",
    color: "#93215F",
  };
  const selectedStyle = {
    border: "2px solid #93215F",
    color: "white",
    background: "#93215F",
  };
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTabIndex(index);
  };

  const renderTabs = () => {
    return (
      <Tabs className="border-b-2 border-l-2 border-r-2 border-primary-color rounded-2xl">
        <TabList>
          <Tab style={selectedTabIndex === 0 ? selectedStyle : defaultStyle} onClick={() => handleTabClick(0)}>
            پذیرش تحصیلی
          </Tab>
          <Tab style={selectedTabIndex === 1 ? selectedStyle : defaultStyle} onClick={() => handleTabClick(1)}>
            سرمایه گذاری
          </Tab>
          <Tab style={selectedTabIndex === 2 ? selectedStyle : defaultStyle} onClick={() => handleTabClick(2)}>
            مهاجرت کاری
          </Tab>
          <Tab style={selectedTabIndex === 3 ? selectedStyle : defaultStyle} onClick={() => handleTabClick(3)}>
            وقت سفارش
          </Tab>
        </TabList>

        <TabPanel >
          {/* Content for Tab 1 */}
          <div className="flex items-center justify-center mt-2 mb-3">
            <select
              value={country}
              onChange={handleCountryChange}
              placeholder="کشور مورد نظر"
              className="text-secondary-color p-2  border-b  focus:text-primary-color focus:border-primary-color  mb-2 md:mr-2 md:mb-0 sm:w-full md:w-auto"
            >
              <option value="">کشور مورد نظر</option>
              <option value="iran">ایران</option>
              <option value="usa">آمریکا</option>
              <option value="canada">کانادا</option>
            </select>
            <select
              value={educationLevel}
              onChange={handleEducationLevelChange}
              placeholder="مقاطع مورد نظر"
              className="text-secondary-color  p-2  border-b  focus:text-primary-color focus:border-primary-color  mb-2 md:mr-2 md:mb-0 sm:w-full md:w-auto"
            >
              <option value="">مقاطع مورد نظر</option>
              <option value="bachelor">لیسانس</option>
              <option value="master">فوق لیسانس</option>
              <option value="phd">دکتری</option>
            </select>
            <select
              value={field}
              onChange={handleFieldChange}
              placeholder="رشته مورد نظر"
              className="text-secondary-color p-2  border-b  focus:text-primary-color focus:border-primary-color  mb-2 md:mr-2 md:mb-0 sm:w-full md:w-auto"
            >
              <option value="">رشته مورد نظر</option>
              <option value="engineering">مهندسی</option>
              <option value="medicine">پزشکی</option>
              <option value="science">علوم</option>
              <option value="law">حقوق</option>
              <option value="social">اداره</option>
            </select>

            <button
              type="button"
              className="mr-7 px-4 py-2 text-white bg-primary-color rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </TabPanel>

        <TabPanel>
          {/* Content for Tab 2 */}
          <div className="flex items-center justify-center mt-2 mb-3">
            <select
              value={country}
              onChange={handleCountryChange}
              placeholder="کشور مورد نظر"
              className="text-secondary-color p-2  border-b  focus:text-primary-color focus:border-primary-color  mb-2 md:mr-2 md:mb-0 sm:w-full md:w-auto"
            >
              <option value="">کشور مورد نظر</option>
              <option value="iran">ایران</option>
              <option value="usa">آمریکا</option>
              <option value="canada">کانادا</option>
            </select>
            <select
              value={educationLevel}
              onChange={handleEducationLevelChange}
              placeholder="روش سرمایه گذاری"
              className="text-secondary-color p-2  border-b  focus:text-primary-color focus:border-primary-color  mb-2 md:mr-2 md:mb-0 sm:w-full md:w-auto"
            >
              <option value="">روش سرمایه گذاری</option>
              <option value="">بورس</option>
              <option value="">اوراق بهادار</option>
              <option value="">صندوق سرمایه</option>
            </select>
            <select
              value={field}
              onChange={handleFieldChange}
              placeholder="ارز مورد نظر"
              className="text-secondary-color p-2  border-b  focus:text-primary-color focus:border-primary-color  mb-2 md:mr-2 md:mb-0 sm:w-full md:w-auto"
            >
              <option value="">ارز مورد نظر</option>
              <option value="">یوهان</option>
              <option value="">یورو</option>
              <option value="">دلار</option>

            </select>

            <button
              type="button"
              className="mr-7 px-4 py-2 text-white bg-primary-color rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </TabPanel>

        <TabPanel>
          {/* Content for Tab 3 */}
          <div className="flex items-center justify-center mt-2 mb-3">
            <select
              value={country}
              onChange={handleCountryChange}
              placeholder="کشور مورد نظر"
              className="text-secondary-color p-2  border-b  focus:text-primary-color focus:border-primary-color  mb-2 md:mr-2 md:mb-0 sm:w-full md:w-auto"
            >
              <option value="">کشور مورد نظر</option>
              <option value="iran">ایران</option>
              <option value="usa">آمریکا</option>
              <option value="canada">کانادا</option>
            </select>
            <select
              value={educationLevel}
              onChange={handleEducationLevelChange}
              placeholder="حرفه مورد نظر"
              className="text-secondary-color p-2  border-b  focus:text-primary-color focus:border-primary-color  mb-2 md:mr-2 md:mb-0 sm:w-full md:w-auto"
            >
              <option value="">حرفه مورد نظر</option>
              <option value="">مهندسی</option>
              <option value="">پزشکی</option>
              <option value="">هنر</option>
            </select>
            <select
              value={field}
              onChange={handleFieldChange}
              placeholder="روش مورد نظر"
              className="text-secondary-color p-2  border-b  focus:text-primary-color focus:border-primary-color  mb-2 md:mr-2 md:mb-0 sm:w-full md:w-auto"
            >
              <option value="">روش مورد نظر</option>
              <option value="">تمام وقت</option>
              <option value="">پاره وقت</option>
              <option value="">غیرحضوری</option>
            
            </select>

            <button
              type="button"
              className="mr-7 px-4 py-2 text-white bg-primary-color rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </TabPanel>

        <TabPanel>
          {/* Content for Tab 4 */}
          <div className="flex items-center justify-center mt-2 mb-3">
            <select
              value={country}
              onChange={handleCountryChange}
              placeholder="کشور مورد نظر"
              className="text-secondary-color p-2  border-b  focus:text-primary-color focus:border-primary-color  mb-2 md:mr-2 md:mb-0 sm:w-full md:w-auto"
            >
              <option value="">کشور مورد نظر</option>
              <option value="iran">ایران</option>
              <option value="usa">آمریکا</option>
              <option value="canada">کانادا</option>
            </select>
            <select
              value={educationLevel}
              onChange={handleEducationLevelChange}
              placeholder="وقت مورد نظر"
              className="text-secondary-color p-2  border-b  focus:text-primary-color focus:border-primary-color  mb-2 md:mr-2 md:mb-0 sm:w-full md:w-auto"
            >
              <option value="">وقت مورد نظر</option>
              <option value="">وقت1</option>
              <option value="">وقت2</option>
              <option value="">وقت3</option>
            </select>
            <select
              value={field}
              onChange={handleFieldChange}
              placeholder="سفارش مورد نظر"
              className="text-secondary-color p-2  border-b  focus:text-primary-color focus:border-primary-color  mb-2 md:mr-2 md:mb-0 sm:w-full md:w-auto"
            >
              <option value="">سفارش مورد نظر</option>
              <option value="">سفارش1</option>
              <option value="">سفارش2</option>
              <option value="">سفارش3</option>
          
            </select>

            <button
              type="button"
              className="mr-7 px-4 py-2 text-white bg-primary-color rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </TabPanel>
      </Tabs>
    );
  };
  return <div>{renderTabs()}</div>;
}
