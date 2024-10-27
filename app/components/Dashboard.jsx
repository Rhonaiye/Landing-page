'use client'
import React, { useState } from 'react';
import { Search, Download, Globe, ChevronDown } from 'lucide-react';
import {FaArrowLeft, FaPiggyBank} from 'react-icons/fa'
import Image from 'next/image';
import dash1 from '../images/dashboard.jpeg'
import dash2 from '../images/dashboard2.jpeg'
import dash3 from '../images/dash3.jpeg'
import dash4 from '../images/dash4.jpeg'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Product Screens');

  const images = [
    { name: 'dash1', src: dash1 },
    { name: 'dash2', src: dash2 }, 
    { name: 'dash3', src: dash3 },
    { name: 'dash4', src: dash4 },
    { name: 'dash5', src: dash2 }, 
    { name: 'dash6', src: dash3 },
    { name: 'dash7', src: dash1 },
    { name: 'dash8', src: dash2 },
    { name: 'dash9', src: dash3 },
  ];
  

  return (
    <div className="bg-[#F3F4F7] min-h-screen p-6 lg:px-[20vh] py-[10vh] lg:py-[12vh]">

      {/* Header Section */}
      <div className="mb-9">

        <button className="flex gap-2 items-center text-gray-600 mb-8">
            <FaArrowLeft className='font-extralight'/>
            Back to Inspiration
        </button>

        {/* Company Info */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center"> <FaPiggyBank size={38} className='mr-3'/> <div>
              <h1 className="text-xl font-semibold">Piggyvest</h1>
              <p className="text-gray-600 max-sm:text-[0.7em] text-sm ">The Better Way to Save & Invest</p>
            </div>
          </div>
          <span className="bg-gray-200 px-3 py-1 rounded-md text-sm">Finance</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="flex gap-1 items-center px-2 lg:px-4 py-2 bg-white rounded-lg border hover:bg-gray-50">
            <p className='max-sm:text-[0.8em]'>Download all Screens</p>
            <Download className="w-4 h-4 mr-2" />
          </button>

          <button className="flex gap-1 items-center px-2 lg:px-4 py-2 bg-white rounded-lg border hover:bg-gray-50">
            <p className='max-sm:text-[0.8em]'>Visit Website</p>
            <Globe className="w-4 h-4 mr-2" />
          </button>
        </div>

       {/* Tabs */}
          <div className="flex items-center border-b max-sm:overflow-auto max-sm:flex-nowrap">
            <button 
              className={`px-4 py-2 text-sm max-sm:text-[0.8em] ${activeTab === 'Product Screens' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('Product Screens')}
            >
              Product <span className='max-sm:hidden'>Screens</span>
            </button>
          
            <button 
              className={`px-4 py-2 text-sm max-sm:text-[0.8em] ${activeTab === 'Marketing Screens' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('Marketing Screens')}
            >
              Marketing <span className='max-sm:hidden'>Screens</span>
            </button>
          
            <button 
              className={`px-4 py-2 text-sm max-sm:text-[0.8em] ${activeTab === 'Email screens' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('Email screens')}
            >
              Email <span className='max-sm:hidden'>Screens</span>
            </button>
            
            <div className="flex-grow text-right text-sm max-sm:text-[0.8em] text-gray-600 px-4 whitespace-nowrap">
              Show 195 of 195 screens
            </div>
          </div>
          
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-4 max-sm:gap-2 mb-6">
        <div className="flex-grow relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search product screens..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border -z-10 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button className="flex items-center justify-between px-4 lg:py-1  bg-white rounded-lg border hover:bg-gray-50 text-sm max-sm:text-sm max-md:px-3 max-md:py-1">
           <p className='my-1 md:my-2 lg:my-1'>  <span className='hidden md:inline'>Filter</span>  screens</p>
           <ChevronDown className="w-4 h-4 ml-2 max-sm:w-3 max-sm:h-3" />
        </button>

      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index)=>(
            <Image key={index} src={image.src} alt={image.name}/>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;