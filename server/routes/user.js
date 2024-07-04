const express = require("express");
const router = express.Router();

router.post("", async (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
