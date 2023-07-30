const express = require("express");
const app = express();
const cors = require("cors");

const port = 5000;

// use middleware
app.use(cors());
app.use(express.json());

// use routes
const routes = require("./routes/route");
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
