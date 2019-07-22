import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import API from '../../../utils/API';

class Post extends Component {
	state = {
		postData: this.props.postData
	};

	makePost = event => {
		event.preventDefault();
		let title = $('#titleInputP')
			.val()
			.trim();
		let comment = $('#commentInputP')
			.val()
			.trim();

		if (title === '') {
			$('#titleInputP').attr('placeholder', 'Your post must have a title!');
		} else if (comment === '') {
			$('#commentInputP').attr('placeholder', 'Your post must have a comment!');
		} else {
			let post = {
				userId: this.state.postData.userId,
				herbId: this.state.postData.herbId,
				title: title,
				comment: comment,
				image: this.state.postData.image,
				name: this.state.postData.name
			};
			// test log...
			console.log('Your post will be: ', post);
			API.postPost(post)
				.then(res => {
					console.log('New post: ', res.data);
					// reset form input fields...
					$('#titleInputP').val('');
					$('#commentInputP').val('');
          // may need to pull in getComments from ResultDisplay...
          this.props.getComments();
				})
				.catch(err => {
					console.log(err);
				});
		}
	};

	render() {
		return (
			<Fragment>
				<form className='mx-auto ml-md-3 mb-3 border-0 round_corner p-5 shadow-sm text-right w-75 bg-white'>
					<div className='form-group'>
						<input
							type='text'
							className='form-control round_corner p-3 shadow-sm border-0 bg-light'
							id='titleInputP'
							placeholder='Title'
						/>
					</div>
					<div className='form-group'>
						<textarea
							className='form-control round_corner p-3 shadow-sm border-0 bg-light'
							id='commentInputP'
							rows='3'
							placeholder='Share your thoughts on this herb...'
							style={{ minHeight: 80, maxHeight: 300 }}
						/>
					</div>
					<button
						type='submit'
						className='btn ui_btn1 border-0 rounded-btn text-light shadow-sm'
						onClick={e => {
							this.makePost(e);
						}}
					>
						Submit
					</button>
				</form>
			</Fragment>
		);
	}
}

export default Post;
