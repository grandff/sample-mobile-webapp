const sqlite3 = require("sqlite3").verbose();

// Connecting to or creating a new SQLite database file
const db = new sqlite3.Database(
  "src/collection.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
);

// Serialize method ensures that database queries are executed sequentially
db.serialize(() => {
  // Create the items table if it doesn't exist
  db.run(
    `CREATE TABLE IF NOT EXISTS sample (
        id INTEGER PRIMARY KEY,
        ttl TEXT,
        ctt TEXT,
        uuid TEXT
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created sample table.");

      // Clear the existing data in the products table
      db.run(`DELETE FROM sample`, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("All rows deleted from sample");

        // Insert new data into the products table
        const values1 = [
          "Oshawott",
          "Basic Pokemon. HP 60. Surprise Attack 20. Flip a coin. If heads, this attack does 10 more damage. Water Gun 30. Weakness: Lightning x2. Resistance: none. Retreat Cost: 1."          
        ];
        const values2 = [
          "Riolu",
          "Basic Pokemon. HP 60. Quick Attack 10. Flip a coin. If heads, this attack does 10 more damage. Weakness: Fighting x2. Resistance: none. Retreat Cost: 1."          
        ];

        const values3 = [
          "Snivy",
          "Basic Pokemon. HP 60. Slam 20. Weakness: Fire x2. Resistance: Water -20. Retreat Cost: 1."        
        ];

        const values4 = [
          "Zorua",
          "Basic Pokemon. HP 60. Stampede 10. Ram 20. Weakness: Fighting x2, Resistance: Psychic -20. Retreat Cost: 1."          
        ];

        const insertSql = `INSERT INTO sample(ttl, ctt) VALUES(?, ?)`;

        db.run(insertSql, values1, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        db.run(insertSql, values2, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        db.run(insertSql, values3, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        db.run(insertSql, values4, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        //   Close the database connection after all insertions are done
        db.close((err) => {
          if (err) {
            return console.error(err.message);
          }
          console.log("Closed the database connection.");
        });
      });
    }
  );
});