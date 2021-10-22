import React from 'react';

const Layout = ({ pageName, children }) => (
	<main className={`${pageName} layout`}>
		<section>{children}</section>
	</main>
);

export default Layout;
