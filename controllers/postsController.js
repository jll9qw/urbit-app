const db = require("../models");

// Defining methods for the PostsController
module.exports = {
  findAll: function(req, res) {
    console.log(req);
    db.Posts.find({herbId: req.body})
      // .sort({ date: -1 })
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  findPostByHerbId: function(req, res) {
		db.Posts.find({ herbId: req.params.herbId })
			// .sort({ date: -1 })
			.then(dbModel => {
        // console.log(dbModel);
        res.json(dbModel);
      })
			.catch(err => res.status(422).json(err));
	},
  findById: function(req, res) {
    db.Posts.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // searchByTerm: (req, res) => {
  //   db.Posts.find(
  //     { $text: { $search: req.params.query } },
  //     { score: { $meta: "textScore" } }
  //   )
  //     .sort({ score: { $meta: "textScore" } })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function(req, res) {
    db.Posts.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Posts.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Posts.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
