"use client";

import { useParams, useRouter } from "next/navigation";    // next/router가 아닌 navigation에서 가져와야함!!
import { useEffect, useState } from "react";
export default function Update() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const router = useRouter();
    const params = useParams(); // view page에서 받은 parameter 확인
    const id = params.id;
    
    // 데이터 조회
    useEffect(() => {
        try {
            fetch('http://localhost:9999/topics/' + id)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setTitle(data.title);
                    setBody(data.body);
                });
        } catch (e) {
            
        }
    }, [id]);

    return (
        <div className="px-5">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-white">This is Sample Create Form</h1>       
            <form onSubmit={(event) => {
                    event.preventDefault(); // on submit 기본 동작 방지
                    const title = event.target.title.value;
                    const body = event.target.body.value;
                    const options = {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ title, body })
                    };
                    try {
                        fetch(`http://localhost:9999/topics/${id}`, options)
                            .then((res) => res.json())
                            .then((data) => {                                
                                const lastid = data.id;
                                router.push(`/read/${lastid}`);                            
                                router.refresh();
                            });                                            
                    } catch (e) {                        
                        router.push(`/read/1`);                            
                        router.refresh();
                    }
            }}>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium  text-white">Title</label>
                <input type="text" value={title} onChange={e=>setTitle(e.target.value)} id="title" name="title" className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="input title" required />
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium  text-white">Body</label>
                <textarea id="body" value={body} onChange={e=>setBody(e.target.value)} name="body" className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="input body" required />
            </div>                    
            <button type="submit" className="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Update</button>
            </form>

        </div>
    )
}