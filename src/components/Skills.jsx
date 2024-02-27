import React from "react";
import { FaDocker, FaReact, FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs, FaJava } from "react-icons/fa6";
import { DiMysql } from "react-icons/di";
import { BiLogoJavascript } from "react-icons/bi";
import { Tooltip } from "@nextui-org/react";

function Skills() {
  const icons = [
    { icon: <FaDocker size={35} />, tooltip: "Docker" },
    { icon: <FaReact size={35} />, tooltip: "React" },
    { icon: <SiMongodb size={35} />, tooltip: "MongoDB" },
    { icon: <FaNodeJs size={35} />, tooltip: "Node.js" },
    { icon: <FaGithub size={35} />, tooltip: "GitHub" },
    { icon: <DiMysql size={35} />, tooltip: "MySQL" },
    { icon: <BiLogoJavascript size={35} />, tooltip: "JavaScript" },
    { icon: <FaJava size={35} />, tooltip: "Java" },
  ];

  return (
    <div className="flex my-4 px-7 py-4 bg-slate-400 border border-solid rounded-full">
      <h6 className="text-sm font-bold mr-8 mt-2 ml-4"> Technologies</h6>
      <div className="flex ">
        {icons.map(({ icon, tooltip }) => (
          <div key={tooltip} className="mr-4">
            <Tooltip content={tooltip} color="success">
              {icon}
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
