import Link from "next/link";

export default async function OpenTutorials() {    
    // 데이터 조회    
    const resp = await fetch('http://localhost:9999/topics');
    const topics = await resp.json();

    return (
        <>
            
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">This is OpenTutorials Practice List</h2>
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>
                <Link href="/read/1">html(SPA + Dynamic View)</Link>
            </li>
            <li>
                <Link href="/read/2">css(SPA + Dynamic View)</Link>
            </li>
            <li><Link href="/create">create(SPA)</Link></li>
            <li><Link href="/update/1">update</Link></li>
            <li><input type="button" value="delete"/></li>            
        </ul>

        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">This is Sample Backend Data List</h2>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
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