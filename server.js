const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { matchSchemes } = require("./matchLogic");

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.post("/match", (req, res) => {
    try {
      console.log("Received data:", req.body);  // <== add this
      const userData = req.body;
      const matched = matchSchemes(userData);
      res.json(matched);
    } catch (err) {
      console.error("Error:", err.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
