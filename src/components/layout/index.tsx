import React, { ReactChild } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

interface Props {
	children: ReactChild;
}

function Layout({ children }: Props) {
	return (
		<div>
			<NavBar />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;
