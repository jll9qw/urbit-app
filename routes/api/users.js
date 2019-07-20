const router = require('express').Router();
const usersController = require('../../controllers/usersController');

// Matches with "/api/users/"
router.route('/').post(usersController.create);

// Matches with "/api/users/:email"
router
	.route('/:email')
	.get(usersController.findUserByEmail)
	//   .get(usersController.findById)
	.put(usersController.update)
	.delete(usersController.remove);

// Matches with "/api/users/search/:term"
// router.route("/search/:query").get(usersController.searchByTerm);

module.exports = router;
