const express = require("express");
const router = express.Router();

const reviewController = require("../controller/review_controller");
const authenticate = require("../middleware/authenticate");

router.post("/create", authenticate, reviewController.createReview);
router.get("/product/:productId", authenticate, reviewController.getAllReview);

module.exports = router;