export default function Create() {
    return (
        <>
        <h2>Holy Moly robopoly</h2>
        <form action="/create_process" method="post">
            <p><input type="text" name="title" placeholder="title"/></p>
            <p><textarea name="description" placeholder="description"></textarea></p>
            <p><input type="submit"/></p>
        </form>
        </>
    )   
}