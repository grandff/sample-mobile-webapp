"use client";

import { useRouter } from "next/navigation";    // next/router가 아닌 navigation에서 가져와야함!!

export default function Create() {
    const router = useRouter(); // client 에서만 사용 가능

    return (
        <>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">This is Sample Create Form</h1>       
        <form onSubmit={(event) => {
                event.preventDefault(); // on submit 기본 동작 방지
                const title = event.target.title.value;
                const body = event.target.body.value;
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ title, body })
                };
                try {
                    fetch(`http://localhost:9999/topics`, options)
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            const lastid = data.id;
                            router.push(`/read/${lastid}`)                            
                        });                                            
                } catch (e) {
                    
                }
        }}>
        <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input type="text" id="title" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="input title" required />
        </div>
        <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body</label>
            <textarea id="body" name="body" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="input body" required />
        </div>                    
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

        </>
    )   
}