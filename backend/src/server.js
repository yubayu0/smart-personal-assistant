const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const apiKeyFreeConverter = process.env.API_FREE_CONVERTER

app.use(
  cors({
    localhost: "http://localhost:5173",
    method: ["GET", "POST", "PUT", "PACTH", "DELETE"],
    credentials: true,
  })
);

app.listen(PORT, (req, res) => {
  console.log("youtube");
});
