import Navbar from "./components/Navbar"
import Skills from "./components/Skills"

export default function App() {
  return (
    <>
    <Navbar/>
    <div className="grid grid-cols-2 gap-4 ">
      <div className="mx-20 my-20 px-10 ">
        <img src="src\assets\Profile Picture.png" width="200" height="200" className="rounded-full" alt="" />
        <h2 className="text-2xl font-bold mt-8">I'm Souvik Raj Singh</h2>
      </div>  

      <div className="mx-20 my-20 px-10 ">
        <h1 className="text-3xl pb-4">Passionate creating  great experience for Digital Products</h1>
        <div className="flex space-x-4">
            <button className='bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Get in Touch</button>
            <button className='border border-black hover:border-blue-700 text-black hover:text-blue-700  py-2 px-4 rounded-full'>See my Work</button>
        </div>

        <hr class="h-px mt-8 mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        
        <h2 className="text-xl"> Skills </h2>
        <Skills />
      </div>

    </div>
    </>
  )
}

