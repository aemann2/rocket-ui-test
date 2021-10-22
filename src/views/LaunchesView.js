import React, { useEffect, useState } from 'react';
import ConnectedView from './ConnectedView';
import Modal from '../components/Modal';
import { fetchLaunchesIfNeeded } from '../actions/Launches';
import Launch from '../components/Launch';

const LaunchesView = ({ dispatch, launchCollection }) => {
	const [showDetails, setShowDetails] = useState(false);
	const [newInfo, setNewInfo] = useState(true);
	const [launchId, setLaunchId] = useState();

	const toggleShowDetails = () => {
		setShowDetails((prevState) => !prevState);
	};

	const getLaunchId = (id) => {
		setLaunchId(id);
		setNewInfo((prevState) => !prevState);
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
				newInfo={newInfo}
				showDetails={showDetails}
				toggleShowDetails={toggleShowDetails}
				getLaunchId={getLaunchId}
			/>
		));

		return <ul>{launchesList}</ul>;
	};

	return (
		<div className='launches'>
			<h2 className='launches__heading'> SpaceX launches </h2>
			<div className='launches__container'>{showAllLaunches()}</div>
			<div>
				{showDetails && (
					<Modal
						toggleShowDetails={toggleShowDetails}
						showDetails={showDetails}
						newInfo={newInfo}
						launchId={launchId}
					/>
				)}
			</div>
		</div>
	);
};

export default ConnectedView(LaunchesView, 'launches');
