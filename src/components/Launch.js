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
		<li className='launchItem'>
			<h2 onClick={handleClick}> {launch.mission_name} </h2>
			<div> Flight Number: {launch.flight_number} </div>
		</li>
	);
};

export default Launch;
