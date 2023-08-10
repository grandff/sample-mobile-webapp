import Link from "next/link";
import React from "react";

export default function BottomBar(){
    return (    
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 border  bottom-0 left-1/2 bg-gray-700 border-gray-600 flex justify-center">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
            {/* 메인화면 */}
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
            {/* 기본 CRUD */}
            <Link href="/sample" data-tooltip-target="tooltip-crud" type="button" className="inline-flex flex-col items-center justify-center px-10  hover:bg-gray-800  group">
                <svg className="w-5 h-5 mb-1 text-gray-400 group-hover:text-blue-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">                                                
                    <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>
                </svg>
                <span className="sr-only">CRUD SAMPLE</span>
            </Link>
            <div id="tooltip-crud" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-700  shadow-sm opacity-0 tooltip ">
                CRUD SAMPLE
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
                
            <div className="flex items-center justify-center">
                    <button data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-800 focus:outline-none dark:focus:ring-blue-800">
                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 460 512"><path d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7 52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2 11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7 16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0 33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z" />
                        </svg>                    
                    <span className="sr-only">New item</span>
                </button>
            </div>
            <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Create new item
                <div className="tooltip-arrow" data-popper-arrow></div>
                </div>       
            {/* 오픈튜토리얼 기본 정보 */}
                <Link href="/opentutorials" data-tooltip-target="tooltip-tutorial" type="button" className="inline-flex flex-col items-center justify-center px-10 hover:bg-gray-800 dark:hover:bg-gray-800 group">
                    <svg className="w-5 h-5 mb-1 text-gray-400  group-hover:text-blue-500 dark:group-hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" aria-hidden="true" fill="currentColor">
                        <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z" />
                    </svg>
                
                <span className="sr-only">Settings</span>
            </Link>
            <div id="tooltip-tutorial" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-700  shadow-sm opacity-0 tooltip dark:bg-gray-700">                    
                OpenTutorials           
            <div className="tooltip-arrow" data-popper-arrow></div>
                    
            </div>       
            {/* 앱화면 연결 모음 */}    
            <Link href="/settings" data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center px-10 hover:bg-gray-800 dark:hover:bg-gray-800 group">
                <svg className="w-5 h-5 mb-1 text-gray-400  group-hover:text-blue-500 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                </svg>
                <span className="sr-only">Settings</span>
            </Link>
            <div id="tooltip-settings" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-700  shadow-sm opacity-0 tooltip dark:bg-gray-700">                    
                Settings           
            <div className="tooltip-arrow" data-popper-arrow></div>
                    
            </div>            
        </div>
    </div>
    );    
};