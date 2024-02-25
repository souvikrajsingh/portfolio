import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function MyLinks() {

    const githubURL = 'https://github.com/souvikrajsingh';
    const linkedinURL = 'https://www.linkedin.com/in/souvik-raj-singh-9650bb187/';
    const twitterURL = 'https://twitter.com/souviktwts'

  return (
    <div className="flex space-x-5 items-center justify-center pt-4">
        <a href={githubURL} target="_blank" rel="noopener noreferrer" className="text-2xl"><FaGithub /></a>
        <a href={linkedinURL} target="_blank" rel="noopener noreferrer" className="text-2xl"><FaLinkedin /></a>
        <a href={twitterURL} target="_blank" rel="noopener noreferrer" className="text-2xl"><FaTwitter /></a>
    </div>
  )
}

export default MyLinks