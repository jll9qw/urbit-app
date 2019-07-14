const router = require("express").Router();
const herbsController = require("../../controllers/herbsController");

// Matches with "/api/herbs/"
router
  .route("/")
  .get(herbsController.findAll)
  .post(herbsController.create);

// Matches with "/api/herbs/:id"
router
  .route("/:id")
  .get(herbsController.findById)
  .put(herbsController.update)
  .delete(herbsController.remove);

// Matches with "/api/herbs/search/:term"
router.route("/search/:query").get(herbsController.searchByTerm);

module.exports = router;
