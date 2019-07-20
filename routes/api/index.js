const router = require("express").Router();
const herbRoutes = require("./herbs");
const userRoutes = require('./users');
// Herb routes
router.use("/herbs", herbRoutes);

// Users routes
router.use('/users', userRoutes);

module.exports = router;
