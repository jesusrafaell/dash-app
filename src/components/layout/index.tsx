import React, { ReactChild } from 'react';
import NavBar from './NavBar';

interface Props {
	children: ReactChild;
}

function Layout({ children }: Props) {
	return (
		<div>
			<NavBar />
			{children}
		</div>
	);
}

export default Layout;
