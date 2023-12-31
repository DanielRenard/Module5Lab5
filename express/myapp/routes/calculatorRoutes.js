const express = require("express");
const calculatorController = require('../controller/calculatorController')
const router = express.Router();

router.get("/add", (req, res) => {
  console.log(req.query)
  calculatorController.addNumbers(req, res)
})

router.get("/subtract", (req, res) => {
    console.log(req.query);
    calculatorController.subtractNumbers(req, res)
  });

  router.get("/multiply", (req, res) => {
    console.log(req.query);
    calculatorController.multiplyNumbers(req, res)
  });

  router.get("/divide", (req, res) => {
    console.log(req.query);
    calculatorController.multiplyNumbers(req, res)
  });

module.exports = router;