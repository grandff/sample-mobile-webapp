"use client";
import { useRouter } from "next/navigation"; 

export default function SampleCreate() {

    const router = useRouter(); // client 에서만 사용 가능

    return (
        <div className="px-5">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-white">This is Sample Sqlite Create Form</h1>       
            <form onSubmit={async (event) => {
                event.preventDefault(); // on submit 기본 동작 방지
                console.log(event.target);
                const ttl = document.querySelector("input[id=ttl]").value;
                console.log(ttl);
                if (ttl == "") { alert("Plz input title"); return false; }
                const ctt = event.target.ctt.value;
                if (ctt == "") { alert("Plz input ctt"); return false; }
                const uuid = event.target.uuid.value;
                //if (uuid == "") { alert("Plz input uuid"); return false; }
            
                if(confirm("테스트 확인용입니다. 확인 누를 경우 이전화면으로 갑니다요.")){
                    router.push(`/sample`);
                    router.refresh();
                }
                return;
            
            }}>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium  text-white">Title</label>
                <input type="text" id="ttl" name="ttl" className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="input title" required />
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium  text-white">Content</label>
                <textarea id="ctt" name="ctt" className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="input content" required />
            </div> 
                <div className="mb-6">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium  sr-only text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4  text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="text" id="uuid" name="uuid" readOnly  className="block w-full p-4 pl-10 text-sm  border  rounded-lg  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Get UUID From App" required />
                        <button  className="text-white absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-purple-600 hover:bg-purple-700 focus:ring-purple-800">Do it</button>
                    </div>
            </div>
                    
            <button type="submit" className="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Submit</button>
            </form>

        </div>
    )
}