import ControlBar from "@/app/create/components/controlBar";

export default async function Read(props) {
    let topic;
    try {
        const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`, { cache: "no-cache" });    
        topic = await resp.json();
    } catch (e) {
        topic = { "id": 1, "title": "html", "body": "html is ..." };
    }

    return (
        <>
            <h2>Read</h2>
            <p>Read, WEB!</p>            
            <p>this is your id {props.params.id}</p>
            <h2>{topic.title}</h2>
            <p>{topic.body}</p>
            <ControlBar />
        </>
    )
}