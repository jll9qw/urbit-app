import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import API from '../../../utils/API';
import Comment from '../Comment/index';
import Post from '../Post/index';

class ResultDisplay extends Component {
	state = {
		result: this.props.result,
		comments: null
	};

	componentDidMount() {
		this.getComments();
	}

	getComments = _ => {
		let herbId = this.state.result._id;
		console.log(herbId);
		API.getPostsByHerbId(herbId)
			.then(res => {
				console.log(res.data);
				this.setState({ comments: res.data });
			})
			.catch(err => console.log(err));
	};

	render() {
		return (
			<Fragment>
				<div className='container p-0'>
					<Link to='/search' className='btn rounded-btn mb-3 shadow-sm'>
						<i className='fas fa-arrow-left text-pinkish' />
					</Link>
				</div>
				<div className='container p-5 border d-flex flex-column shadow-sm bg-light- bg-white round_corner'>
					<p className='text-center text-md-left'>
						<span
							className='font-weight-bold lead text-pinkish'
							id='nameResult'
						>
							{this.state.result.name}
						</span>
						{this.state.result.family ? (
							<Fragment>
								,{' '}
								<span className='font-italic' id='familyResult'>
									{this.state.result.family}
								</span>
							</Fragment>
						) : null}
					</p>
					{this.state.result.otherNames ? (
						<Fragment>
							<p className='text-center text-md-left text-muted text-lowercase'>
								({' '}
								<span id='otherNamesResult'>
									{this.state.result.otherNames}
								</span>{' '}
								)
							</p>
						</Fragment>
					) : null}
					<p
						className='text-center text-md-left lead text-pinkish'
						id='ratingResult'
					>
						<i className='far fa-star' />
						<i className='far fa-star' />
						<i className='far fa-star' />
						<i className='far fa-star' />
						<i className='far fa-star' />
					</p>
					<div className='container'>
						<div className='row'>
							<div className='col-md-4'>
								<div className='row'>
									<div
										className='col-12 round_corner shadow-sm'
										id='imageResult'
										style={{
											minHeight: 200,
											backgroundImage:
												"url('https://source.unsplash.com/random/300x200?herbs')",
											backgroundSize: 'cover',
											backgroundPosition: 'center'
										}}
									/>
									<div className='col-12'>
										<p
											className='text-center font-italic text-muted font-weight-light'
											id='botanicalNamesResult'
										>
											{this.state.result.botanicalNames
												? this.state.result.botanicalNames
												: null}
										</p>
									</div>
								</div>
							</div>
							<div className='col-md-8 px-0 px-md-3'>
								<p>
									{this.state.result.generalDescription ? (
										<Fragment>
											<span
												className='font-weight-bold text-pinkish'
												id='generalDescriptionResult'
											>
												General Description:{' '}
											</span>
											<span>{this.state.result.generalDescription}</span>
										</Fragment>
									) : null}
								</p>
							</div>
						</div>
					</div>
					{this.state.result.medicallyValidUses ? (
						<Fragment>
							<p>
								<span
									className='font-weight-bold'
									id='medicallyValidUsesResult'
								>
									Medically Valid Uses:{' '}
								</span>
								<span>{this.state.result.medicallyValidUses}</span>
							</p>
						</Fragment>
					) : null}
					{this.state.result.unsubstantiatedClaims ? (
						<Fragment>
							<p>
								<span
									className='font-weight-bold'
									id='unsubstantiatedClaimsResult'
								>
									Unsubstantiated Claims:{' '}
								</span>
								<span>{this.state.result.unsubstantiatedClaims}</span>
							</p>
						</Fragment>
					) : null}
					{this.state.result.sideEffects ? (
						<Fragment>
							<p>
								<span className='font-weight-bold' id='sideEffectsResult'>
									Side Effects:{' '}
								</span>
								<span>{this.state.result.sideEffects}</span>
							</p>
						</Fragment>
					) : null}
					{this.state.result.demonstratedUses ? (
						<Fragment>
							<p>
								<span className='font-weight-bold' id='demonstratedUsesResult'>
									Demonstrated Uses:{' '}
								</span>
								<span>{this.state.result.demonstratedUses}</span>
							</p>
						</Fragment>
					) : null}
					{this.state.result.recommendedIntake ? (
						<Fragment>
							<p>
								<span className='font-weight-bold' id='recommendedIntakeResult'>
									Recommended Intake:{' '}
								</span>
								<span>{this.state.result.recommendedIntake}</span>
							</p>
						</Fragment>
					) : null}
					{this.state.result.dosingFormat ? (
						<Fragment>
							<p>
								<span className='font-weight-bold' id='dosingFormatResult'>
									Dosing Format:{' '}
								</span>
								<span>{this.state.result.dosingFormat}</span>
							</p>
						</Fragment>
					) : null}
					{this.state.result.interactions ? (
						<Fragment>
							<p>
								<span className='font-weight-bold' id='interactionsResult'>
									Interactions:{' '}
								</span>
								<span>{this.state.result.interactions}</span>
							</p>
						</Fragment>
					) : null}
					{this.state.result.suggestedDosage ? (
						<Fragment>
							<p>
								<span className='font-weight-bold' id='suggestedDosageResult'>
									Suggested Dosage:{' '}
								</span>
								<span>{this.state.result.suggestedDosage}</span>
							</p>
						</Fragment>
					) : null}
					<h4 className='mb-3'>Comments:</h4>
					{this.props.userData ? (
						<Post
							postData={{
								userId: this.props.userData._id,
								herbId: this.props.result._id,
								image: this.props.userData.image,
								name: `${this.props.userData.firstName} ${
									this.props.userData.lastName
								}`
							}}
							getComments={this.getComments}
						/>
					) : (
						<p className='text-muted text-center text-md-left'>
							<Fragment>
								<button type="button" className="text-pinkish border-0 bg-transparent mr-n1" data-toggle="modal" data-target="#logInModal">Sign in</button>to leave a comment.
							</Fragment>
						</p>
					)}
					{this.state.comments !== null && this.state.comments.length > 0 ? (
						<Fragment>
							{this.state.comments.map(comment => {
								return <Comment postData={comment} />;
							})}
						</Fragment>
					) : (
						<Fragment>
							<p>Be the first to comment on {this.state.result.name}!</p>
						</Fragment>
					)}
				</div>
			</Fragment>
		);
	}
}

export default ResultDisplay;
