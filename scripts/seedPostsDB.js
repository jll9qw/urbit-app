const mongoose = require('mongoose');
const db = require('../models');
// This file empties the Herbs collection and inserts the Herbs below
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/urbit');

const postsSeed = [
	{
		userId: '5d33914089a6891b31c70ac4',
		herbId: '5d333bda369fb41fc7d7f83d',
		title: 'More research needed!',
		comment:
			'We need more information on this! Does anyone know more about Glycine?',
		image: 'https://s.cdpn.io/profiles/user/1215873/512.jpg?100000',
		name: 'Maurice Webb'
	},
	{
		userId: '5d33914089a6891b31c70ac5',
		herbId: '5d333bda369fb41fc7d7f83d',
		title: 'Re: More research needed!',
		comment: 'I agree. We need more webscrapers...',
		image:
			'http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png',
		name: 'Jason Lloyd'
	},
	{
		userId: '5d33914089a6891b31c70ac5',
		herbId: '5d3381c6f2794d10d23a9dd4',
		title: 'Purifier',
		comment: 'Garlic can help with toxins...',
		image:
			'http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png',
		name: 'Jason Lloyd'
	},
	{
		userId: '5d33914089a6891b31c70ac3',
		herbId: '5d3381c6f2794d10d23a9de4',
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
