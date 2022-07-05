const router = require("express").Router();
const productRoute = require("./product-routes");
const tagRoute = require("./tag-routes");
const categoryRoute = require("./category-routes");

router.use("/products", productRoute);
router.use("/categories", categoryRoute);
router.use("/tags", tagRoute);

module.exports = router;
