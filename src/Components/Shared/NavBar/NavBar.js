import React from 'react';
import './NavBar.css';
import logo from '../../../resources/images/awLogo.svg';
import speechBubble from '../../../resources/images/speech-bubble.svg';
import avatar from '../../../resources/images/playerAvatar.svg';

function NavBar() {
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
					<img src={avatar} alt="Avatar" />
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