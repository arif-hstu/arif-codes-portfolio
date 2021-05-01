import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './NavBar.css';
import logo from '../../../resources/images/awLogo.svg';
import speechBubble from '../../../resources/images/speech-bubble.svg';
import avatar from '../../../resources/images/playerAvatar.svg';

import { RouteLocationContext } from '../../../App';

function NavBar() {
	const [routeLocation, setRouteLocation] = useContext(RouteLocationContext);
	const [styleOfAvatar, setStyleOfAvatar] = useState({
		visibility: 'visible'
	});

	useEffect(() => {
		if (routeLocation === '/' || routeLocation === '') {
			setStyleOfAvatar({
				visibility: 'visible'
			});
		} else {
			setStyleOfAvatar({
				visibility: 'hidden'
			});
		}
	}, [routeLocation]);

	console.log('[routeLocation]:', routeLocation, styleOfAvatar);

	return (
		<div className='NavBarHolder'>
			<div className='NavBar'>
				<div className="logoHolder">
					<div className="logo">
						<img src={logo} alt="Logo" />
					</div>
					<div className="bar">
						|
					</div>
					<div className="menu">
						<p>MENU</p>
					</div>
				</div>

				<div className="avatarHolder">
					<img style={styleOfAvatar } src={avatar} alt="Avatar" />
				</div>

				<div className="infoHolder">
					<div className="resume">
						<button className='primaryBtn'>
							RESUME
						</button>
					</div>
					<div className="hire">
						<img src={speechBubble} alt="Message" />
						<p>HIRE ME</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavBar;