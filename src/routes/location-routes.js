const db = require("../database");

const express = require('express');
const router = express.Router();

router.get("/locations", async (req, res) => {
  const connection = await db.getConnection();
  connection.query("SELECT * FROM location", (err, result) => {
    if (err) {
      console.error("Error fetching location:", err);
      return res.status(500).json({ error: err.message });
    } 
    return res.status(200).json(result);
  });
});

module.exports = router;