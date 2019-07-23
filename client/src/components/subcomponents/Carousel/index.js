import React from 'react';

const Carousel = props => {
	return (
		<div>
			<div className='container p-3 mb-3'>
				<div
					id='carouselExampleControls'
					className='carousel slide'
					data-ride='carousel'
				>
					<div
						className='carousel-inner round_corner shadow-sm'
						style={{ height: 300 }}
					>
						<div className='carousel-item active position-relative'>
							<div className='position-absolute d-flex flex-column justify-content-around align-items-center w-100 text-center text-white p-5 mt-4 mt-md-3'>
								<h3 className='mt-n4 d-none d-md-block '>
									What is holistic health ?
								</h3>
								<hr className='d-none d-md-block w-25 rounded border-0 ui_gradient1 mt-n1 py-1' />
								<p className='lead px-5 text-break'>
									Holistic medicine practitioners believe that the whole person
									<span className='d-none d-md-inline'>
										{' '}
										is made up of interdependent parts and if one part is not
										working properly, all the other parts will be affected.
									</span>
									<span className='d-md-none'>...</span>
								</p>
								<a
									href='https://www.webmd.com/balance/guide/what-is-holistic-medicine#1'
									target='_blank'
									rel='noopener noreferrer'
								>
									<button
										// href='#'
										className='d-none d-md-block btn rounded-btn ui_btn2 border-0 text-white'
									>
										Learn more
									</button>
								</a>
							</div>
							<img
								src='https://source.unsplash.com/random/?meditation'
								className='d-block w-100 center_img'
								alt='...'
							/>
						</div>
						<div className='carousel-item position-relative'>
							<div className='position-absolute d-flex flex-column justify-content-around align-items-center w-100 text-center text-white p-5 mt-4 mt-md-3'>
								<h3 className='d-none d-md-block'>Words of Wisdom</h3>
								<hr className='d-none d-md-block w-25 rounded border-0 ui_gradient1 mt-n1 py-1' />
								<p className='lead px-5'>
									"A society that keeps cures a secret so they can continue to
									sell medication
									<span className='d-none d-md-inline'>
										{' '}
										for huge profits is not a society, but a huge mental asylum"
										- Dr. Sebi
									</span>
									<span className='d-md-none'>...</span>
								</p>
							</div>
							<img
								src='https://source.unsplash.com/random/?yoga'
								className='d-block w-100 center_img'
								alt='...'
							/>
						</div>
						<div className='carousel-item position-relative'>
							<div className='position-absolute d-flex flex-column justify-content-center justify-content-md-around align-items-center w-100 text-center text-white p-5 mt-4 mt-md-n2 mt-lg-3'>
								<h3 className='mt-n4 d-none d-md-block'>
									Meditation and Stress
								</h3>
								<hr className='d-none d-md-block w-25 rounded border-0 ui_gradient1 mt-n1 py-1' />
								<p className='lead px-5'>
									A study indicated that meditation can improve both physical
									and emotional responses
									<span className='d-none d-md-inline'>
										{' '}
										to stress. People who meditated regularly for six weeks
										showed less activation of their immune systems and less
										emotional distress when they were put in a stressful
										situation.{' '}
									</span>
									<span className='d-md-none'>...</span>
								</p>
								<a
									href='https://www.webmd.com/balance/features/meditation-heals-body-and-mind#1'
									target='_blank'
									rel='noopener noreferrer'
								>
									<button
										// href='#'
										className='d-none d-md-block btn rounded-btn ui_btn2 border-0 text-white'
									>
										Learn more
									</button>
								</a>
							</div>
							<img
								src='https://source.unsplash.com/random/?wellness'
								className='d-block w-100 center_img'
								alt='...'
							/>
						</div>
					</div>
					<a
						className='carousel-control-prev'
						href='#carouselExampleControls'
						role='button'
						data-slide='prev'
					>
						<span className='carousel-control-prev-icon' aria-hidden='true' />
						<span className='sr-only'>Previous</span>
					</a>
					<a
						className='carousel-control-next'
						href='#carouselExampleControls'
						role='button'
						data-slide='next'
					>
						<span className='carousel-control-next-icon' aria-hidden='true' />
						<span className='sr-only'>Next</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
