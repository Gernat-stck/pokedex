import React from "react";
import logo from "../../img/pokeball.png";
import { Link } from "react-router-dom";
import SelectType from "../ButtonType/SelectType";

export default function Nav() {
  return (
    <div className="relative">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="/" className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="name-title self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Pokedex
            </span>
          </a>
          <div className="flex items-center">
            <Link
              to={"/"}
              className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline"
            >
              (503) 7691-8279
            </Link>
            <a
              href="https://www.pokemon.com/es/pokedex"
              className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
              target="blank"
            >
              Pagina Oficial
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <Link
                  to={"/"}
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Categorias {" "}
                  <svg
                    className="p-0.5 w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className=" drop hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 "
                >
                  <ul
                    className="overflow-y-auto h-48 py-auto text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <SelectType />
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  to={"/search"}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Busca tu Pokemon{" "}
                </Link>
              </li>
              <li>
                <a
                  href="https://support.pokemon.com/hc/es"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Contactanos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
