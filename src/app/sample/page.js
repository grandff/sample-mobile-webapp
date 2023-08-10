import Link from "next/link";

export default async function List() {
    // 데이터 조회
    let samples;
    try {
        const resp = await fetch("https://sample-mobile-webapp.vercel.app/api/sample", { cache: "no-cache" });
        samples = await resp.json();    
    } catch (e) {
        samples = [
            {"id" : 4, "ttl" : "test1", "ctt" : "123123"}
        ];
    }    
    
    return (
        <div className="relative overflow-x-auto mx-5">
            <table className="w-full text-sm text-left  text-gray-400">
                <thead className="text-xs  uppercase  bg-gray-700 text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>                        
                    </tr>
                </thead>
                <tbody>
                    {
                        samples.map((sample) => {
                            return <tr className=" border-b bg-gray-800 border-gray-700" key={sample.id}>
                                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                                        {sample.id}
                                    </th>
                                    <td className="px-6 py-4">
                                        <Link href={`/sample/${sample.id}`} key={sample.id + "link"}>
                                            {sample.ttl}
                                            </Link>
                                    </td>                                    
                                </tr>                            
                        })
                    }                                        
                </tbody>
            </table>
            <div className="flex justify-end mt-10">
                <Link href="/sample/insert">
                    <button type="button" className="text-white 0 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">Insert</button>
                </Link>                
            </div>
        </div>


    )
}