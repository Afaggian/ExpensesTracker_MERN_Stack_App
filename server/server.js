const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json());

// mongodb connection
const con = require("./db/connection.js");

// use routes
const routes = require("./routes/route");
// app.use("/", routes);

con
  .then(db => {
    if (!db) return process.exit(1);

    // listen to the server
    app.listen(port, () => {
      console.log(`Server is running on port: http://localhost:${port}`);
    });

    app.on("error", (err) =>
      console.error(`Failed to connect to server on: ${err}`)
    );
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
    process.exit(1);
  });
