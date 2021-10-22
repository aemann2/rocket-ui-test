import React from 'react';

const Launch = (props) => {
	const { launch, showDetails, toggleShowDetails, getLaunchId } = props;

	const handleClick = () => {
		getLaunchId(launch.rocket.rocket_id);
		if (!showDetails) {
			toggleShowDetails();
		}
	};

	return (
		<li className='launch'>
			<h2 className='launch__heading' onClick={handleClick}>
				{launch.mission_name}
			</h2>
			<p className='launch__par'> Flight Number: {launch.flight_number} </p>
		</li>
	);
};

export default Launch;
