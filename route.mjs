import express from "express";

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("This is home page");
})

app.get('/about', (req, res) => {
    res.send("This is about page")
})

app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`);
})
