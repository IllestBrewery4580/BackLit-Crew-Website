const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post("/contact", (req, res) => {
    // handle contact form submission
res.send("Message received!");
});

app.listen(PORT, () => console.group(`Server running on ${PORT}`));