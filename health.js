import express from "express";
import { exec } from "child_process";

const app = express();

// Lance OpenClaw en arrière‑plan
exec("node index.js", (err) => {
  if (err) console.error("Agent error:", err);
});

app.get("/", (req, res) => {
  res.send("OK");
});

const port = process.env.PORT || 10000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Health server live on port ${port}`);
});
