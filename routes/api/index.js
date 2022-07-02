const router = require("express").Router();
const categoryRoute = require("./category-routes");
const productRoute = require("./product-routes");
const tagRoute = require("./tag-routes");

router.use("/categories", categoryRoute);
router.use("/products", productRoute);
router.use("/tags", tagRoute);

module.exports = router;
