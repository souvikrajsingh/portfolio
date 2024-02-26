import React from "react";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdOutlineSimCardDownload } from "react-icons/md";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

function Navbar() {
  return (
    <div className="bg-gray-500 border-b border-black">
      <nav className="bg-white flex justify-between items-center w-[92%] mx-auto pt-6 font-montserat fixed top-0 left-0 right-0 z-10 ">
        <div>
          <span className="text-2xl font-bold">
            <a href="http://localhost:5173/">Souvik</a>
          </span>
        </div>
        <div>
          <ul className="flex justify-center gap-10 py-2">
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <a href="#" className="flex">
                Resume{" "}
                <MdOutlineSimCardDownload className="h-6 ml-1 animate-bounce" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg font-bold my-4 py-2 px-4 rounded-full">
            Get in Touch
          </button>
          <button className="h-10 pl-8">
            <Switch
              defaultSelected
              size="lg"
              color="success"
              startContent={<SunIcon />}
              endContent={<MoonIcon />}
            ></Switch>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
