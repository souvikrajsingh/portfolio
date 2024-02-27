import React from "react";
import { Link } from "react-router-dom";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

function Navbar() {
  const resumePdfUrl = "srcassetsdemo-resume.pd f";

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
              <a
                href={resumePdfUrl}
                className="flex"
                target="_blank"
                rel="noopener noreferrer"
                download="demo-resume-souvikrajsingh.pdf"
              >
                Resume
                <svg
                  className="h-6 ml-2 animate-bounce"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g data-name="15.Arrow Down">
                    <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" />
                    <path d="m12 18.414-4.707-4.707 1.414-1.414L12 15.586l3.293-3.293 1.414 1.414L12 18.414z" />
                    <path d="M11 6h2v11h-2z" />
                  </g>
                </svg>
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
