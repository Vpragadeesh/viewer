import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Log visits to a file (simple & efficient)
app.post("/track", (req, res) => {
  const log = {
    ...req.body,
    ip: req.ip,
  };

  fs.appendFileSync("visits.log", JSON.stringify(log) + "\n");

  console.log("New Visit:", log);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Tracking server running on port 3000");
});
