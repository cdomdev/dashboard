"use client";
import { useState } from "react";
import Link from "next/link";
import { logoutAdmin } from "./lib/logout";

export const Profile = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <>
      <div
        className="flex items-center gap-3 w-full px-4 py-2 text-sm  bg-white rounded-lg dark:bg-gray-800 dark:text-white cursor-pointer text-white"
        onClick={toggleDropdown}
      >
        <div className="relative w-10 h-10 overflow-hidden  rounded-full dark:bg-gray-600 cursor-pointer">
          <svg
            className="absolute w-10 h-12 text-gray-400 -Back-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>

        <span>administrador</span>
      </div>

      <div
        id="userDropdown"
        className={`z-10 absolute bottom-20 w-full max-w-[90%]  ${
          dropdownOpen ? "block" : "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-slate-50  dark:text-black`}
      >
        <div className="px-4 py-3 text-sm text-white dark:text-black">
          <div className="font-semibold text-base uppercase">Admin</div>
          <div className="font-medium truncate">{""}</div>
        </div>
        <ul className="text-sm" aria-labelledby="avatarButton">
          <li>
            <Link
              href="/"
              className="block px-4 py-2 text-center hover:bg-gray-100"
            >
              Dashboard
            </Link>
          </li>
        </ul>
        <div>
          <button
            onClick={async () => {
              await logoutAdmin();
            }}
            type="button"
            className="block py-2 w-full px-0 rounded-b-md text-sm text-center text-gray-700 dark:text-black  hover:bg-red-600 duration-150 hover:text-white cursor-pointer dark:hover:text-white"
          >
            Cerrar sesion
          </button>
        </div>
      </div>
    </>
  );
};
