"use client"
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function ControlBar() {
    const params = useParams();
    const router = useRouter();
    const id = params.id;
    return (
        <div className="flex justify-center items-center">
            {id ? null : <>
            <button type="button" className="focus:outline-none text-white  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-green-600 hover:bg-green-700 focus:ring-green-800">
                <Link href="/create">Create</Link>
            </button>
            </>}
            
            {id ? <>
                <button onClick={() => {
                    const options = { method: 'DELETE' };
                    try {
                        fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`, options)
                            .then((res) => res.json())
                            .then((data) => {                                
                                router.push(`/`);                            
                                router.refresh();
                            });
                    }catch(e) {
                    }
            }} type="button" className="focus:outline-none text-white  focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-red-600 hover:bg-red-700 focus:ring-red-900">
                <Link href="/delete">Delete</Link>
            </button>
            <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:ring-yellow-900">
                    <Link href={"/update/" + id}>Update</Link>
            </button>
            </> : null}
            
        </div>

    )
}