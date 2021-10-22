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
					<div>
						<h2>Rocket Name:</h2> {rocketDetails.rocket_name}
					</div>
					<div>
						<h2>Cost Per Launch:</h2> ${rocketDetails.cost_per_launch}
					</div>
					<div>
						<h2>Rocket Description:</h2> {rocketDetails.description}
					</div>
					<button
						className='closeButton'
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
