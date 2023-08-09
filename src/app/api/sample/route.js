import { NextRequest, NextResponse } from "next/server";

import { open } from "sqlite";  
import { Database } from "sqlite3";
 
let db = null;

export async function GET(request) {  
  
  // db init check
  if (!db) {
      db = await open({
        filename: "./collection.db", // Specify the database file path        
        driver : Database,
      });
  }

  // Perform a database query to retrieve an item based on the id
  const item = await db.all("SELECT * FROM sample ORDER BY id desc");
  
  // Return the items as a JSON response with status 200
  return NextResponse.json(item);
}

export async function POST(request) {
    const data = await request.json();
    console.log(data);
     

    if (!db) {
        db = await open({
            filename: "./collection.db", // Specify the database file path        
            driver : Database,
        });
    }
    
    // param setting
    const values1 = [
        data.ttl,
        data.ctt,
        data.uuid
    ];

    // data insert
    const insertSql = `INSERT INTO sample(ttl, ctt, uuid) VALUES(?, ?, ?)`;    
    let result = await db.run(insertSql, values1);
    console.log(result);
    
    return NextResponse.json({ "id" : result.lastID ?? 0 });
}