const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userroute = require("./routers/routes/userroute");
const db = require("./db/db.js");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.use(userroute);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
