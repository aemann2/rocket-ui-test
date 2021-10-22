import React from 'react';

const Launch = (props) => {
	const { showDetails, launch, toggleShowDetails, getLaunchId } = props;

	const handleClick = () => {
		getLaunchId(launch.rocket.rocket_id);
		toggleShowDetails();
	};

	return (
		<li className='launchItem'>
			<h2 onClick={handleClick}> {launch.mission_name} </h2>
			<div> Flight Number: {launch.flight_number} </div>
		</li>
	);
};

export default Launch;
