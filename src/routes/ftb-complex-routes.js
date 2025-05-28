const db = require("../database");
const express = require("express");
const router = express.Router();

router.get("/complexes", async (req, res) => {
  let connection;
  try {
    connection = await db.getConnection();
    
    let query = "SELECT * FROM complex";
    const params = [];

    if (req.query.location) {
      query += " WHERE idlocation = ?";
      params.push(req.query.location);
    }

    const result = await new Promise((resolve, reject) => {
      connection.query(query, params, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching complexes:", error);
    res.status(500).json({ error: error.message });
  } 
});

module.exports = router;