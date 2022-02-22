import React from 'react';

function SlideBar() {
	return (
		<div className='sidebar' id='sidebars'>
			<div className='close-icon' id='close'>
				<div></div>
			</div>

			<ul className='links'>
				<li className='link active'>
					<a>
						<div className='icon'></div>Home
					</a>
				</li>
				<li className='link'>
					<a>
						<div className='icon'></div>Dashboard
					</a>
				</li>
				<li className='link'>
					<a>
						<div className='icon'></div>Overview
					</a>
				</li>
				<li className='link'>
					<a>
						<div className='icon'></div>About
					</a>
				</li>
				<li className='link'>
					<a>
						<div className='icon'></div>Contact
					</a>
				</li>
				<li className='link'>
					<a>
						<div className='icon'></div>Account
					</a>
				</li>
				<li className='link'>
					<a>
						<div className='icon'></div>Setting
					</a>
				</li>
			</ul>
		</div>
	);
}

export default SlideBar;
