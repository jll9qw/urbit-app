import React from 'react';
import { Link } from "react-router-dom";

const ResultCard = props => {
	let desc = props.result.generalDescription
		.substr(0, 150)
		.trim()
		.concat(' ...');
	return (
		<div>
			<div className='card round_corner card_fx'>
				<img
					src='https://source.unsplash.com/random/300x200?alfalfa'
					className='card-img-top'
					alt='...'
				/>
				<div className='card-body text-center-'>
					<h5 className='card-title text-center text-sm-left'>
						{props.result.name}
					</h5>
					<p className='card-text'>
						{desc}
					</p>
					<Link to='/result' className='btn rounded-btn ui_btn2 border-0 text-white' onClick={_=> {
						props.getResult(props.result)
					}}>
						Learn more
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ResultCard;
