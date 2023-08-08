import { sqlite3 } from "sqlite3";
import { open, Database } from "sqlite";  

let db = null;

// define the get request handler
export async function GET(req, res) {
    // db init check
    if (!db) {
        db = await open({
            filename : "./"
        });
    }
}