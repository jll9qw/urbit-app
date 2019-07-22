import axios from 'axios';

export default {
	// Gets a user with given email
	getUser: email => {
		return axios.get('/api/users/' + email);
	},
	// Saves a herb to the database
	createUser: function(userData) {
		return axios.post('/api/users', userData);
	},
	// Gets the posts with the given herbId
	getPostsByHerbId: herbId => {
		return axios.get('/api/posts/' + herbId);
	},
	// Saves a Post to the database
	postPost: function(postData) {
		return axios.post('/api/posts/', postData);
	},
	// Gets all herbs
	getHerbs: function() {
		return axios.get('/api/herbs');
	},
	// Gets the herb with the given id
	getHerb: function(id) {
		return axios.get('/api/herbs/' + id);
	},
	// Gets the herbs based on search term
	getHerbsByQuery: query => {
		return axios.get('/api/herbs/search/' + query);
	},
	// Deletes the herb with the given id
	deleteHerb: function(id) {
		return axios.delete('/api/herbs/' + id);
	},
	// Saves a herb to the database
	saveHerb: function(herbData) {
		return axios.post('/api/herbs', herbData);
	}
};
