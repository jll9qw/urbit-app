import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';

const ProfileButton = props => {
	let user = props.user;
	// let placeHolderImage =
	// 	'http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png';
	return (
		<Fragment>
			<li
				className='nav-item mx-0 ml-lg-3 dropdown position-relative d-flex justify-content-center align-items-center'
				style={{
					fontFamily:
						'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
				}}
			>
				<button
					className='border position-relative shadow-sm'
					style={{
						height: 65,
						width: 65,
						borderRadius: '50%',
						zIndex: 3,
						left: 18,
						// backgroundImage:
						// 	"url('https://s.cdpn.io/profiles/user/1215873/512.jpg?100000')",
						// backgroundImage: user.img
						// 	? `url('${user.img}')`
						// 	: `url('${placeHolderImage}')`,
						backgroundImage: `url('${user.image}')`,
						backgroundSize: 'cover',
						backgroundPosition: 'center'
					}}
				/>
				<button
					className='nav-link btn ui_btn2 border-0 my-lg-2 text-white rounded-btn px-4 shadow'
					type='button'
					id='dropdownMenuButton'
					data-toggle='dropdown'
					aria-haspopup='true'
					aria-expanded='false'
				>
					{user.firstName} {user.lastName}
				</button>

				<div
					className='dropdown-menu round_corner shadow border-0'
					aria-labelledby='dropdownMenuButton'
				>
					<button className='dropdown-item'>profile</button>
					<button className='dropdown-item text-pinkish' onClick={_=> {props.logOut()}}>log out</button>
				</div>
			</li>
		</Fragment>
	);
};

export default ProfileButton;
