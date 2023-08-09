import Link from "next/link";
import ControlBar from "../create/components/controlBar";

export default async function OpenTutorials() {    
    // 데이터 조회    
    let topics;
    try {
        // cache 미사용
        const resp = await fetch('http://localhost:9999/topics', { cache: "no-cache"});
        topics = await resp.json();
    } catch (e) {
        topics = [
            { "id": 1, "title": "html", "body": "html is ..." },
            { "id": 2, "title": "css", "body": "css is ..." }
        ];
    }
    

    return (
        <>
            
        <h2 className="mb-2 text-lg font-semibold  text-white">This is OpenTutorials Practice List</h2>
        <ul className="max-w-md space-y-1 list-disc list-inside text-gray-400">
            {topics.map(topic=>{
                return <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
            })}                                
        </ul>
        <ControlBar />    

        <h2 className="mb-2 text-lg font-semibold  text-white">This is Sample Backend Data List</h2>
            <ul className="max-w-md space-y-1  list-disc list-inside text-gray-400">
                {
                    topics.map((topic) => {
                        return (
                            <li key={topic.id}>
                                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
                            </li>
                        )
                    })
                }            
        </ul>
        </>
    )
}