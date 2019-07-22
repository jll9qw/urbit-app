const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	date: { type: Date, default: Date.now },
	image: {type: String, default: 'http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png'}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
