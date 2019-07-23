import React, { Component, Fragment } from 'react';
import LogInModal from '../LogInModal/index';
import SubscribeModal from '../SubscribeModal/index';
import ProfileButton from '../ProfileButton/index';
import { Link } from 'react-router-dom';
import API from '../../../utils/API';
import './style.css';
// import $ from 'jquery';
import urbitLogo from '../../../assets/images/urbit_logo.png';

class Nav extends Component {
	state = {
		userData: null,
		invalidPasswordLI: false,
		invalidPasswordSM: false,
		invalidEmail: false
	};
	// functions...
	logIn = credentials => {
		API.getUser(credentials.email)
			.then(res => {
				let user = res.data[0];
				if (credentials.password === user.password) {
					this.setState({
						userData: {
							_id: user._id,
							firstName: user.firstName,
							lastName: user.lastName,
							email: user.email,
							image: user.image
						}
					});
					this.props.getUserData(this.state.userData);
				} else {
					this.setState({ invalidPasswordLI: true });
				}
			})
			.catch(err => {
				console.log(err);
				this.setState({invalidEmail: true});
			});
	};
	subscribe = userInput => {
		API.createUser(userInput)
			.then(res => {
				// let user = res.data;
				let {email, password} = res.data;
				// console.log(res);
				this.logIn({email, password});
			})
			.catch(err => {
				console.log(err);
			})
	};
	validatePasswordSM = (boolean) => {
		if (!boolean) {
			this.setState({invalidPasswordSM: true});
		}
	}
	logOut = _=> {
		this.setState({userData: null});
		this.props.getUserData(null);
	};

	render() {
		return (
			<div>
				<div className='container px-0'>
					<nav className='navbar navbar-expand-lg navbar-light d-flex align-items-stretch'>
						<div
							
							className='navbar-brand nav-link align-self-center rounded-btn- shadow-sm- px-3 active- bg-transparent disabled border-0'
							// href="#"
							style={{ 
								color: '#43c6ac', 
								height: 50, 
								width: 100,
								backgroundImage: `url('${urbitLogo}')`,
								backgroundSize: 'contain',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat'
							}}
						>
							
						</div>
						<button
							className='navbar-toggler border-0 shadow rounded-btn px-3'
							type='button'
							data-toggle='collapse'
							data-target='#navbarSupportedContent'
							aria-controls='navbarSupportedContent'
							aria-expanded='false'
							aria-label='Toggle navigation'
							style={{ outline: 'none' }}
						>
							<span className='navbar-toggler-icon' />
						</button>

						<div
							className='collapse navbar-collapse'
							id='navbarSupportedContent'
						>
							<ul className='navbar-nav text-center ml-lg-auto d-flex justify-content-between align-items-center'>
								<li className='nav-item mx-1'>
									<Link to='/'
										className='nav-link rounded-btn mb-3 my-lg-2 px-4 px-md-4 bg-transparent'
										// href="#"
									>
										home
									</Link>
								</li>
								<li className='nav-item mx-1'>
									<button
										className='nav-link rounded-btn mb-3 my-lg-2 px-4 px-md-4 bg-transparent disabled'
										// href="#"
									>
										forum
									</button>
								</li>
								<li className='nav-item mx-1'>
									<Link to='/aboutUs'
										className='nav-link rounded-btn mb-3 my-lg-2 px-4 px-md-4 bg-transparent'
										// href="#"
									>
										about us
									</Link>
								</li>
								<li className='nav-item mx-1'>
									<button
										className='nav-link rounded-btn mb-3 my-lg-2 px-4 px-md-4 bg-transparent disabled'
										// href="#"
									>
										blog
									</button>
								</li>
								{!this.state.userData ? (
									<Fragment>
										<li className='nav-item  mx-1'>
											<button
												className='nav-link btn btn-light rounded-btn mb-3 my-lg-2 px-4 px-md-4 shadow bg-white'
												// href="#"
												data-toggle='modal'
												data-target='#logInModal'
											>
												log in
											</button>
										</li>
										<li className='nav-item mx-0 ml-lg-3'>
											<button
												className='nav-link btn ui_btn2 border-0 my-lg-2 text-white rounded-btn px-4 shadow'
												// href="#"
												data-toggle='modal'
												data-target='#subscribeModal'
											>
												subscribe
											</button>
										</li>
										<LogInModal logIn={this.logIn} />
										<SubscribeModal subscribe={this.subscribe} validatePasswordSM={this.validatePasswordSM}/>
									</Fragment>
								) : (
									<ProfileButton user={this.state.userData} logOut={this.logOut} />
								)}
							</ul>
						</div>
					</nav>
				</div>

				{this.state.invalidPasswordLI ? (
					<Fragment>
						<div
							className='alert alert-warning alert-dismissible fade show round_corner alert_gradient border-0 text-white text-center w-75 mx-auto shadow position-absolute'
							id='invalidPasswordLI'
							role='alert'
							style={{
								fontFamily:
									'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
								zIndex: 5
							}}
						>
							<strong>Error!</strong> Invalid password, please try again.
							<button
								type='button'
								className='close'
								data-dismiss='alert'
								aria-label='Close'
								onClick={_ => {
									this.setState({ invalidPasswordLI: false });
								}}
							>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
					</Fragment>
				) : null}
				{this.state.invalidEmail ? (
					<Fragment>
						<div
							className='alert alert-warning alert-dismissible fade show round_corner alert_gradient border-0 text-white text-center w-75 mx-auto shadow'
							id='invalidEmail'
							role='alert'
							style={{
								fontFamily:
									'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
								zIndex: 5
							}}
						>
							<strong>Error!</strong> Invalid email. No user exists with this email.
							<button
								type='button'
								className='close'
								data-dismiss='alert'
								aria-label='Close'
								onClick={_ => {
									this.setState({ invalidEmail: false });
								}}
							>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
					</Fragment>
				) : null}
				{this.state.invalidPasswordSM ? (
					<Fragment>
						<div
							className='alert alert-warning alert-dismissible fade show round_corner alert_gradient border-0 text-white text-center w-75 mx-auto shadow'
							id='invalidEmail'
							role='alert'
							style={{
								fontFamily:
									'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
								zIndex: 5
							}}
						>
							<strong>Error!</strong> Password mismatch. Make sure both passwords are the same before submitting!
							<button
								type='button'
								className='close'
								data-dismiss='alert'
								aria-label='Close'
								onClick={_ => {
									this.setState({ invalidPasswordSM: false });
								}}
							>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
					</Fragment>
				) : null}
			</div>
		);
	}
}

export default Nav;
