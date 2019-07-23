const mongoose = require('mongoose');
const db = require('../models');
// This file empties the Herbs collection and inserts the Herbs below
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/urbit');

const postsSeed = [
	{
		userId: '5d36544218ee4339a1f84262',
		herbId: '5d3654392eae71399b027e26',
		title: 'More research needed!',
		comment:
			'We need more information on this! Does anyone know more about Glycine?',
		image: 'https://s.cdpn.io/profiles/user/1215873/512.jpg?100000',
		name: 'Maurice Webb'
	},
	{
		userId: '5d36544218ee4339a1f84263',
		herbId: '5d3654392eae71399b027e26',
		title: 'Re: More research needed!',
		comment: 'I agree. We need more webscrapers...',
		image:
			'http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png',
		name: 'Jason Lloyd'
	},
	{
		userId: '5d36544218ee4339a1f84263',
		herbId: '5d3654392eae71399b027e2f',
		title: 'Purifier',
		comment: 'Garlic can help with toxins...',
		image:
			'http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png',
		name: 'Jason Lloyd'
	},
	{
		userId: '5d36544218ee4339a1f84261',
		herbId: '5d3654392eae71399b027e3f',
		title: 'Sebi says',
		comment: 'Milk Thistle is good for the kidneys.',
		image:
			'http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png',
		name: 'Dr. Sebi'
	}
];

db.Posts.remove({})
	.then(() => db.Posts.collection.insertMany(postsSeed))
	.then(data => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
