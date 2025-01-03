import express, { Request, Response } from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/news", async (req: Request, res: Response) => {
  try {
    const response = await fetch("https://www.nba.com/news");
    const html = await response.text();
    res.send(html);
  } catch (error) {
    res.status(500).send("Error fetching NBA news");
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
