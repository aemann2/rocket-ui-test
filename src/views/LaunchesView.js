import React, { useEffect, useState } from 'react';
import ConnectedView from './ConnectedView';
import Modal from '../components/Modal';
import { fetchLaunchesIfNeeded } from '../actions/Launches';
import Launch from '../components/Launch';

const LaunchesView = ({ dispatch, launchCollection }) => {
	const [showDetails, setShowDetails] = useState(false);
	const [launchId, setLaunchId] = useState();

	const toggleShowDetails = () => {
		setShowDetails((prevState) => !prevState);
	};

	const getLaunchId = (id) => {
		setLaunchId(id);
	};

	useEffect(() => {
		fetchLaunchesIfNeeded({ dispatch, launchCollection });
	}, []);

	const showAllLaunches = () => {
		const { launches } = launchCollection;

		if (!launchCollection || launchCollection.fetching) {
			return <div> LOADING </div>;
		}

		if (!launchCollection.launches.length) {
			return <div> NO DATA </div>;
		}

		const launchesList = launches.map((launch) => (
			<Launch
				key={launch.id}
				launch={launch}
				showDetails={showDetails}
				toggleShowDetails={toggleShowDetails}
				getLaunchId={getLaunchId}
			/>
		));

		return <ul>{launchesList}</ul>;
	};

	return (
		<div>
			<h2> SpaceX launches </h2>
			{showAllLaunches()}
			{showDetails && (
				<Modal
					toggleShowDetails={toggleShowDetails}
					showDetails={showDetails}
					launchId={launchId}
				/>
			)}
		</div>
	);
};

export default ConnectedView(LaunchesView, 'launches');
