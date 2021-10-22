import React, { useState, useEffect } from 'react';
import rocketService from '../services/RocketService';

const Modal = ({ toggleShowDetails, newInfo, launchId }) => {
	const [rocketDetails, setRocketDetails] = useState({});

	useEffect(() => {
		rocketService
			.get(launchId)
			.then((res) => setRocketDetails(res.data))
			.catch((err) => console.log(err));
	}, [newInfo]);

	return (
		<div>
			{rocketDetails ? (
				<div className='modal'>
					<div className='modal__par'>
						<h2 className='modal__heading'>Rocket Name:</h2>
						{rocketDetails.rocket_name}
					</div>
					<div className='modal__par'>
						<h2 className='modal__heading'>Cost Per Launch:</h2> $
						{rocketDetails.cost_per_launch}
					</div>
					<div className='modal__par'>
						<h2 className='modal__heading'>Rocket Description:</h2>
						{rocketDetails.description}
					</div>
					<button
						className='modal__button'
						type='button'
						onClick={() => toggleShowDetails()}
					>
						Close
					</button>
				</div>
			) : (
				'Loading'
			)}
		</div>
	);
};
export default Modal;
