import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const ResultDisplay = props => {
	let result = props.result;
	return (
		<Fragment>
			<div className='container p-0'>
			<Link to='/search' className='btn rounded-btn mb-3 shadow-sm'><i className="fas fa-arrow-left text-pinkish"></i></Link>
			</div>
			<div className='container p-5 border d-flex flex-column shadow-sm bg-light round_corner'>
				
				<p className='text-center text-md-left'>
					<span className='font-weight-bold lead text-pinkish' id='nameResult'>
						{result.name}
					</span>
					{result.family ? (
						<Fragment>
							,{' '}
							<span className='font-italic' id='familyResult'>
								{result.family}
							</span>
						</Fragment>
					) : null}
				</p>
				{result.otherNames ? (
					<Fragment>
						<p className='text-center text-md-left text-muted text-lowercase'>
							( <span id='otherNamesResult'>{result.otherNames}</span> )
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
										{result.botanicalNames ? result.botanicalNames : null}
									</p>
								</div>
							</div>
						</div>
						<div className='col-md-8 px-0 px-md-3'>
							<p>
								<span
									className='font-weight-bold text-pinkish'
									id='generalDescriptionResult'
								>
									General Description:{' '}
								</span>
								<span>
									{result.generalDescription}
								</span>
							</p>
						</div>
					</div>
				</div>
				{result.medicallyValidUses ? (
					<Fragment>
						<p>
					<span className='font-weight-bold' id='medicallyValidUsesResult'>
						Medically Valid Uses:{' '}
					</span>
					<span>
						{result.medicallyValidUses}
					</span>
				</p>
					</Fragment>
				) : null}
				{result.unsubstantiatedClaims ? (
					<Fragment>
										<p>
					<span className='font-weight-bold' id='unsubstantiatedClaimsResult'>
						Unsubstantiated Claims:{' '}
					</span>
					<span>
						{result.unsubstantiatedClaims}
					</span>
				</p>
					</Fragment>
				) : null}
				{result.sideEffects ? (
					<Fragment>
						<p>
					<span className='font-weight-bold' id='sideEffectsResult'>
						Side Effects:{' '}
					</span>
					<span>
						{result.sideEffects}
					</span>
				</p>
					</Fragment>
				) : null}
				{result.demonstratedUses ? (
					<Fragment>
						<p>
					<span className='font-weight-bold' id='demonstratedUsesResult'>
						Demonstrated Uses:{' '}
					</span>
					<span>
						{result.demonstratedUses}
					</span>
				</p>
					</Fragment>
				) : null}
				{result.recommendedIntake ? (
					<Fragment>
						<p>
					<span className='font-weight-bold' id='recommendedIntakeResult'>
						Recommended Intake:{' '}
					</span>
					<span>
						{result.recommendedIntake}
					</span>
				</p>
					</Fragment>
				) : null}
				{result.dosingFormat ? (
					<Fragment>
						<p>
					<span className='font-weight-bold' id='dosingFormatResult'>
						Dosing Format:{' '}
					</span>
					<span>
						{result.dosingFormat}
					</span>
				</p>
					</Fragment>
				) : null}
				{result.interactions ? (
					<Fragment>
						<p>
					<span className='font-weight-bold' id='interactionsResult'>
						Interactions:{' '}
					</span>
					<span>
						{result.interactions}
					</span>
				</p>
					</Fragment>
				) : null}
				{result.suggestedDosage ? (
					<Fragment>
						<p>
					<span className='font-weight-bold' id='suggestedDosageResult'>
						Suggested Dosage:{' '}
					</span>
					<span>
						{result.suggestedDosage}
					</span>
				</p>
					</Fragment>
				) : null}
			</div>
		</Fragment>
	);
};

export default ResultDisplay;
