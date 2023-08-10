"use client";

import Script from "next/script";



export default function AppToWeb() {
    // js bridge test 1
    function callNative01() {
        try {
            window.webkit.messageHandlers.callbackHandler.postMessage("testValue");
        } catch (e) {
            alert(e);
        }
    }

    function callNative02() {
        try {
            window.webkit.messageHandlers.callbackHandler.postMessage({key01:"testValue01", key02:"testValue02"});
        } catch (e) {
            alert(e);
        }
    }

    function callNative03() {
        try {
            window.location = "sampleWebAppKdn://testHost";
        } catch (e) {
            alert(e);
        }
    }

    

    return (
        <div className="px-5">
            <Script src="/scripts/public.js" />
            <h2 className="mb-2 text-lg font-semibold  text-white">This is App And Web Functions</h2>
            <ul className="max-w-md space-y-1  list-disc list-inside text-gray-400">
                <li>
                    <button onClick={callNative01} type="button" className="text-white focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">Bridge JS Test1</button>
                </li>
                <li>
                    <button onClick={callNative02} type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium  focus:outline-none  rounded-lg border  focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700">Bridge JS Test2</button>
                </li>
                <li>
                    <button onClick={callNative03} type="button" className="text-white  focus:outline-none focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 border-gray-700">Schema JS Test </button>
                </li>
            </ul>

        </div>
    )
    
}