import Navbar from "../components/Navbar.jsx";
import MyLinks from "../components/MyLinks.jsx";
import ProCard from "../components/ProCard.jsx";
import Skills from "../components/Skills.jsx";
import { FaMicrosoft } from "react-icons/fa";
import { NextUIProvider } from "@nextui-org/react";

function Home() {
  return (
    <NextUIProvider>
      <Navbar />
      <div className="grid grid-cols-3 gap-4 ">
        <div className="mx-20 my-28 col-span-1 fixed ">
          <img
            src="src\assets\Profile Picture.png"
            width="200"
            height="200"
            className="rounded-full ml-10"
            alt="profile-picture"
          />
          <h2 className="text-3xl font-bold mt-8 items-center justify-center">
            I'm Souvik Raj Singh
          </h2>
          <h2 className="text-lg font-semibold items-center justify-center pt-2">
            Front-End Developer turned Full stack
          </h2>
          <h2 className="flex items-center justify-center pt-2">
            <FaMicrosoft className="mr-2 h-4 mt-1" />
            Alpha Microsoft Learn Student Ambassador
          </h2>
          <MyLinks />
        </div>

        <div className=" my-24 mx-20 col-span-2 relative col-start-2">
          <h1 className="text-3xl pb-6">
            Passionate creating great experience for Digital Products
          </h1>
          <div className="flex space-x-4">
            <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Get in Touch
            </button>
            <button className="border border-black hover:border-blue-700 text-black hover:text-blue-700  py-2 px-4 rounded-full">
              See my Work
            </button>
          </div>

          <hr class="h-px mt-8 mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <h2 className="text-xl"> Skills </h2>

          <Skills />

          <hr class="h-px mt-8 mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <h2 className="text-xl">Projects</h2>

          <div className="flex gap-4">
            <ProCard className="pt-10" />
            <ProCard className="pt-10" />
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}

export default Home;
