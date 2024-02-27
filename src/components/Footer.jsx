import React from "react";

function Footer() {
  return (
    <div className="bg-black rounded-full m-10 text-white flex  items-center justify-center w-2/3">
      <div className="m-8">
        <img
          src="src\assets\favicon-img.png"
          width={80}
          height={80}
          alt="profile-picture"
        />
      </div>
      <div className="flex flex-col m-10">
        <h2 className="text-lg font-bold mb-2">I'm Souvik Raj Singh</h2>
        <h2 className="text-sm font-semibold mb-4">
          Front-End Developer turned Full stack
        </h2>
      </div>
      <div className="flex flex-row space-x-8 m-10">
        <div className="flex flex-col">
          <div className="mb-2">Blogs</div>
          <div>Projects</div>
        </div>
        <div className="flex flex-col">
          <div className="mb-2">Socials</div>
          <div>Contact me</div>
        </div>
      </div>

      <div className="">
        <button className="bg-white text-black p-1 rounded-full">
          <a href="mailto:souvikrajsingh02@gmail.com">Talk to me</a>
        </button>
      </div>
    </div>
  );
}

export default Footer;
