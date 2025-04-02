const express = require("express");
const { calculateAverage } = require("../controllers/averageController");

const router = express.Router();
router.get("/:numberId", calculateAverage);

module.exports = router;
