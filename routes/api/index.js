const router = require("express").Router();
const herbRoutes = require("./herbs");

// Herb routes
router.use("/herbs", herbRoutes);

module.exports = router;
