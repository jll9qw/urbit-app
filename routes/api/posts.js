const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/posts/"
router
  .route("/")
  // .get(postsController.findAll)
  .get(postsController.findPostByHerbId)
  .post(postsController.create);

// Matches with "/api/posts/:id"
router
	.route('/:herbId')
	.get(postsController.findPostByHerbId)
	//   .get(usersController.findById)
	.put(postsController.update)
	.delete(postsController.remove);

// Matches with "/api/posts/search/:term"
// router.route("/search/:query").get(postsController.searchByTerm);

module.exports = router;
