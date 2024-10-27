'use client'
import React, { useState } from 'react';
import { Search, Menu } from 'lucide-react';
import { BookOpen, Layout, Briefcase, Book } from 'lucide-react';
import {FaLightbulb, FaBookOpen} from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md';


const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="">
        {/* Sidebar */}
        <div
        className={`fixed left-0 z-40 lg:z-auto bottom-0 top-0 lg:translate-x-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 lg:w-[15vh] w-[16vh] bg-white border-r flex flex-col`}
        >
      
        {/* Navigation Links */}
        <nav className="flex-1 pt-14">
          <ul>
            <li>
              <a href="#" className="flex flex-col text-[0.8em] items-center space-x-3 py-10 font-semibold text-purple-600 bg-purple-50">
                <FaLightbulb className="h-5 w-5" />
                <span>Inspiration</span>
              </a>
            </li>

            <li>
              <a href="#" className="flex flex-col text-[0.8em] items-center space-x-1 py-10 text-black font-semibold hover:bg-gray-50">
                <Layout className="h-5 w-5" />
                <span >UI Components</span>
              </a>
            </li>

            <li>
              <a href="#" className="flex flex-col text-[0.8em] items-center space-x-3 py-10 text-black font-semibold hover:bg-gray-50">
                <Briefcase className="h-5 w-5" />
                <span>Job Board</span>
              </a>
            </li>

            <li>
              <a href="#" className="flex flex-col text-[0.8em] items-center space-x-3 py-10 text-black font-semibold hover:bg-gray-50">
                <FaBookOpen className="h-5 w-5" />
                <span>Courses</span>
              </a>
            </li>

          </ul>
        </nav>
        </div>





       {/* Top Navigation */}

      <nav className="flex items-center fixed z-50 left-0 lg:left-[0%] right-0 bg-white justify-between px-4 py-2  lg:pl-16">

          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl">Resvail</span>
          </div>
       

        
           {/* Middle nav */}
           <div className="flex-1 max-w-md mx-4">
             <div className="relative">
               <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none"> <Search className="h-4 w-4 text-gray-400"/> </div>
               <input
                 type="text"
                 placeholder="Search here..."
                 className="w-full pl-10 bg-slate-50 pr-4 py-2 rounded-3xl text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
               />
             </div>
           </div>
         
           {/* Right section */}
           <div className="flex items-center max-sm:hidden">
             <button className="px-3 py-1 rounded-md bg-purple-100 text-purple-600 hover:bg-purple-200">OS</button>
             <MdArrowDropDown size={25} />
           </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleSidebar} className="lg:hidden p-2 text-gray-500" aria-label="Toggle sidebar">
             <Menu className="h-6 w-6" />
           </button>
         
         </nav>

         
         
          {/* Mobile Overlay */}
           {isSidebarOpen && (
           <div className="fixed bg-black left-0 right-0 top-0 bottom-0 bg-opacity-50 lg:hidden z-30" onClick={() => setIsSidebarOpen(false)}/>
           )}
         
    </div>
  );
};
         
export default Navbar;
