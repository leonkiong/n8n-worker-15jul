const express = require("express");
const app = express();
const port = process.env.PORT || 5678;

app.get("/", (req, res) => res.send("Worker running 🚀"));
app.listen(port, () => console.log(`Health check server on port ${port}`));
