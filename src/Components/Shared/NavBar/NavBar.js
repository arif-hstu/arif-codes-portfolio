import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from "framer-motion"

import './NavBar.css';
import logo from '../../../resources/images/logoMain.svg';
import speechBubble from '../../../resources/images/speech-bubble.svg';
import avatar from '../../../resources/images/avatarPurple.svg';
import animatedLogo from '../../../resources/images/logoWIthoutEye.svg'
import light from '../../../resources/images/light.svg'

import { RouteLocationContext } from '../../../App';
import Eye from '../Eye/Eye';

function NavBar() {
	const [routeLocation, setRouteLocation] = useContext(RouteLocationContext);

	const [isOpen, setIsOpen] = useState(false);
	const [winWidth, setWinWidth] = useState(0);
	// const [angle, setAngle] = useState(0);

	useEffect(() => {
		const arrow = document.querySelector("#arrow");
		window.addEventListener("mousemove", ({ clientX, clientY }) => {
			const angle = Math.atan2(clientY, clientX);
			arrow.style.transform = `rotate(${angle}rad)`;
			arrow.style.transformOrigin = 'top left';
		});

		if (routeLocation === '/' || routeLocation === '') {
			setIsOpen(true);
			setWinWidth(window.innerWidth);
		} else {
			setIsOpen(false);
			setWinWidth(window.innerWidth);
		}
	}, [routeLocation, window.innerWidth]);

	const variants = {
		open: { scale: 1, opacity: 1, x: 0 },
		closed: { scale: 0.3, opacity: 0, x: `-${winWidth / 3}px`, y: '-80%' },
	}

	const variantsFade = {
		open: { opacity: 1 },
		closed: { opacity: 0 },
	}

	return (
		<div className='NavBarHolder'>
			<div className='NavBar'>
				<div className="logoHolder">
					<div className="logo">
						<img src={logo} alt="Logo" />
						<div className='arrow' id="arrow">
							<img src={light} alt="" />
						</div>
					</div>
					<div className="bar">
						|
					</div>
					<div className="menu">
						<p>MENU</p>
					</div>
				</div>

				<motion.div
					className="avatarHolder"
					animate={isOpen ? 'open' : 'closed'}
					variants={variants}
				>
					<img src={avatar} alt="Avatar" />
					<Eye />
				</motion.div>
				<motion.div
					className='animatedLogoHolder'
					animate={!isOpen ? 'open' : 'closed'}
					variants={variantsFade}
				>
					<img src={animatedLogo} alt="" />
				</motion.div>

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

