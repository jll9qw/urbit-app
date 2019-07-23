const router = require("express").Router();
const herbRoutes = require("./herbs");
const userRoutes = require('./users');
const postRoutes = require('./posts');
// Herb routes
router.use("/herbs", herbRoutes);

// Users routes
router.use('/users', userRoutes);

// Posts routes
router.use('/posts', postRoutes);

module.exports = router;
