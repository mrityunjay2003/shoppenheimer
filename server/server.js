const express = require("express");
const app = express();

const cors = require("cors");
const pool = require("./db");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
