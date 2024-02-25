import React from 'react';
import { FaDocker } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si"; 
import { FaNodeJs } from "react-icons/fa6";
import { DiMysql } from "react-icons/di";
import { BiLogoJavascript } from "react-icons/bi";
import { FaJava } from "react-icons/fa6";


function Skills() {
  return (
    <div className='flex my-4 px-7 py-4 bg-slate-400 border border-solid rounded-full'>
        <h6 className='text-sm font-bold mr-8 mt-2 ml-4'> Technologies</h6>
        <div className='flex mx-11'>
        <FaDocker size={35} className='mr-4' />
        <FaReact size={35} className='mr-4'/>
        <SiMongodb size={35} className='mr-4' />
        <FaNodeJs size={35} className='mr-4' />
        <FaGithub size={35} className='mr-4' />
        <DiMysql size={35} className='mr-4' />
        <BiLogoJavascript size={35} className='mr-4'/> 
          <FaJava size={35} className='mr-4'/>
        </div>
    </div>
  )
}

export default Skills;