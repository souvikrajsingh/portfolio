import { FaReact } from "react-icons/fa";
import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa6";


function Skills() {
  return (
    <div className="flex my-4 px-4 py-4 bg-slate-200 rounded-full border border-solid border-black">
        <h5 className="mr-4 font-bold">Technologies</h5>
        <FaReact size={35} className="mr-4" title="React"/>
        <FaGithub size={35} className="mr-4" title="Github"/>
        <IoLogoNodejs size={35} className="mr-4" title="Node js"/>
        <BiLogoTailwindCss size={35} className="mr-4" title="Tailwind"/>
        <DiMongodb size={35} className="mr-4" title="Mongodb"/>
        <FaBootstrap size={35} className="mr-4" title="Bootstrap"/>
        <FaDocker size={35} title="Docker"/>
    </div>
  )
}

export default Skills;