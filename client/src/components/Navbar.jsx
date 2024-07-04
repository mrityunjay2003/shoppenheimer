import { Search, Sell } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-[60px]">
      <div className="py-2.5 px-5 flex items-center justify-between">
        <div className="w-1/3 flex items-center">
          <span className="text-sm font-bold cursor-pointer ml-3">EN</span>
          {/* <div className="border border-gray-600 flex items-center ml-6 p-1 rounded-sm">
            <input className="border-0"></input>
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div> */}
          <div className="max-w-md mx-auto">
            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Shop for.."
              />
            </div>
          </div>
        </div>

        <div className="w-1/3 text-center">
          <h1 className="font-urban font-bold text-2xl">Shoppenheimer</h1>
        </div>

        <div className="w-1/3 flex items-center justify-end">
          <p className="font-sm font-urban ml-6">REGISTER</p>
          <p className="font-sm font-urban ml-6 mr-6">SIGN IN</p>
          <Badge badgeContent={4} color="primary">
            <Sell />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
