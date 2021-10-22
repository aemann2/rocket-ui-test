import React from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';

function MasterLayoutHOC(WrappedComponent, pageName) {
	const MasterLayoutImpl = (props) => {
		const layoutProps = {
			pageName,
		};

		return (
			<Layout {...layoutProps}>
				<WrappedComponent {...props} />
			</Layout>
		);
	};

	const mapStateToProps = (state) => state;

	const mapDispatchToProps = (dispatch) => ({
		dispatch,
	});

	return connect(mapStateToProps, mapDispatchToProps)(MasterLayoutImpl);
}

export default MasterLayoutHOC;
