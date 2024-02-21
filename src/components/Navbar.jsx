import React from 'react'
import { SiAdobexd } from "react-icons/si";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineSimCardDownload } from "react-icons/md";


function Navbar() {
  return (
    <div>
        <header className='bg-white'>
            <nav className='flex justify-between items-center w-[92%] mx-auto pt-6 font-montserat'>
                <div>
                    <span className = "font-bold"><a href="http://localhost:5173/">Souvik</a></span>
                </div>
                <div>
                    <ul className='flex justify-center gap-10 py-2'>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#" className='flex'>Resume <MdOutlineSimCardDownload className="h-6" /></a></li>
                    </ul>
                </div>
                <div>
                    <button className='bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' >Get in Touch</button>                    
                    <button className='h-10 pl-10'><MdDarkMode/></button>
                    
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar;