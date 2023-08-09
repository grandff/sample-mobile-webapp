import { NextRequest, NextResponse } from "next/server";

import { open } from "sqlite";  
import { Database } from "sqlite3";
 
let db = null;

export async function GET(request, { params }) {  
  const id = params.id;    
  
  // db init check
  if (!db) {
      db = await open({
        filename: "./collection.db", // Specify the database file path        
        driver : Database,
      });
  }

  // Perform a database query to retrieve an item based on the id
  const item = await db.get("SELECT * FROM sample WHERE id = ?", id);
  
  // Return the items as a JSON response with status 200
  return NextResponse.json(item);
}