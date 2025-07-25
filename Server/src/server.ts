import express, { Application } from "express";

const app: Application = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello World:)) hehehaha");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
