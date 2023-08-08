import Link from "next/link";
import React from "react";

export default function BottomBar(){
    return (    
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 border  bottom-0 left-1/2 bg-gray-700 border-gray-600 flex justify-center">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
            <Link href="/" data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-10  hover:bg-gray-800  group">
                <svg className="w-5 h-5 mb-1 text-gray-400 group-hover:text-blue-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                </svg>
                <span className="sr-only">Home</span>
            </Link>
            <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-700  shadow-sm opacity-0 tooltip ">
                Home
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <div className="flex items-center justify-center">
                <button data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-800 focus:outline-none dark:focus:ring-blue-800">
                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    <span className="sr-only">New item</span>
                </button>
            </div>
            <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Create new item
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>            
            <Link href="/opentutorials" data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center px-10 hover:bg-gray-800 dark:hover:bg-gray-800 group">
                <svg className="w-5 h-5 mb-1 text-gray-400 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                </svg>
                <span className="sr-only">Settings</span>
            </Link>
            <div id="tooltip-settings" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-700  shadow-sm opacity-0 tooltip dark:bg-gray-700">                    
                OpenTutorials           
            <div className="tooltip-arrow" data-popper-arrow></div>
                    
            </div>            
        </div>
    </div>
    );    
};