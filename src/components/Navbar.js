import React from "react";
import Dark from './Dark';



export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <header className="bg-slate-100 dark:bg-slate-900 dark:text-sky-100 p-1 z-20 top-0 md:sticky">
                    <div className="container flex justify-between mx-auto">
                        <a rel="noopener noreferrer" href="#landing" aria-label="Back to homepage" className="flex items-center p-1 text-2xl">
                            Shivam Sharma
                        </a>
                        <div className="flex flex-grow items-center justify-end"><Dark/></div>       
                        <ul className="items-stretch hidden space-x-3 md:flex">
                            <li className="flex">
                                <a rel="noopener noreferrer" href="#about" className="flex items-center px-4 -mb-1 hover:text-sky-800  dark:border-transparent">About</a>
                            </li>
                            <li className="flex">
                                <a rel="noopener noreferrer" href="#projects" className="flex items-center px-4 -mb-1 hover:text-sky-800  dark:border-transparent">Projects</a>
                            </li>
                            <li className="flex">
                                <a rel="noopener noreferrer" href="#skills" className="flex items-center px-4 -mb-1 hover:text-sky-800  dark:border-transparent">Skills</a>
                            </li>
                            <li className="flex">
                                <a rel="noopener noreferrer" href="#contact" className="flex items-center px-4 -mb-1 hover:text-sky-800  dark:border-transparent">Contact</a>
                            </li>
                        </ul>
                        
                        <button className="flex justify-end p-4 md:hidden" onClick={() => setNavbarOpen(!navbarOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                   
                    <div className="md:hidden">
                        <ul className={(navbarOpen? "": "hidden")}>
                                <li className="active"><a href="#about" className="block text-sm px-2 py-4 bg-white hover:bg-slate-100 dark:bg-[#001529] dark:hover:bg-slate-900  font-semibold">About</a></li>
                                <li><a href="#projects" className="block text-sm px-2 py-4 bg-sky-100 hover:bg-slate-100 transition dark:bg-[#01182e] dark:hover:bg-slate-900  duration-300">Projects</a></li>
                                <li><a href="#skills" className="block text-sm px-2 py-4 bg-white hover:bg-slate-100 transition dark:bg-[#001529] dark:hover:bg-slate-900 duration-300">Skills</a></li>
                                <li><a href="#contact" className="block text-sm px-2 py-4 bg-sky-100 hover:bg-slate-100 transition dark:bg-[#01182e] dark:hover:bg-slate-900 duration-300">Contact</a></li>
                         </ul>
                    </div>
                </header>
    </>
  );
}
