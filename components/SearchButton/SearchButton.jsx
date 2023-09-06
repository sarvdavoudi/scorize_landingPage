import React from "react";

const SearchButton = () => {
  return (
    <button type="button" className="mr-7 px-4 py-2 text-white bg-primary-color rounded-md hover:bg-opacity-80 focus:outline-none ">
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
  );
};

export default SearchButton;
