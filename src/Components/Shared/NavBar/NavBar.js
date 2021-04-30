import React from 'react';
import './NavBar.css';
import logo from '../../../resources/images/awLogo.svg';

function NavBar() {
	return (
		<div className='NavBar'>
			<div className="logoHolder">
				<div className="logo">
					<img src={logo} alt="Logo" />
				</div>
				<div className="bar">
					|
				</div>
				<div className="menu">
					Menu
				</div>
			</div>
			<div className="infoHolder">
				<div className="resume">
					|
				</div>
				<div className="messageIcon">
					<img src={messageIcon} alt="Message" />
				</div>

				<div className="hire">
					HIRE ME
				</div>
			</div>
		</div>
	)
}

export default NavBar;