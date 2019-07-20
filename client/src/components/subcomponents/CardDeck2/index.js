import React from 'react';
import './style.css';

const CardDeck2 = props => {
	return (
		<div>
			<div className='container shadow-sm- rounded p-3'>
				<div className='row'>
					<div className='container card-deck'>
						<div className='card border-0 overflow-hidden bg-transparent'>
							<div className='card-body text-center'>
								<i
									className='fab fa-pagelines text-pinkish rounded m-3'
									style={{ fontSize: '5em' }}
								/>
								<h5 className='card-title font-weight-bold'>
									Herbal resources. Botanical solutions.
								</h5>
								<p className='card-text'>
									Get critical botanical information for research and nutrition.
								</p>
							</div>
						</div>
						<div className='card border-0 overflow-hidden bg-transparent'>
							<div className='card-body text-center'>
								<i
									className='fas fa-search text-pinkish rounded m-3'
									style={{ fontSize: '5em' }}
								/>
								<h5 className='card-title font-weight-bold'>
									Search for herbs, symptoms, or remedies.
								</h5>
								<p className='card-text'>
									Be proactive in combating hereditary diseases or seasonal illnesses with natural products. 
								</p>
							</div>
						</div>
						<div className='card border-0 overflow-hidden bg-transparent'>
							<div className='card-body text-center'>
								<i
									className='fas fa-heartbeat text-pinkish rounded m-3'
									style={{ fontSize: '5em' }}
								/>
								<h5 className='card-title font-weight-bold'>
									Holistic and alternative health.
								</h5>
								<p className='card-text'>
									Recommend, share, and learn home remedies to combat the most common health issues. Use our resource as a reference for natural cures.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardDeck2;
