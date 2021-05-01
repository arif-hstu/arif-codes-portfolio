import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Eye.css';
import * as THREE from 'three';




/***********************/
import { useIsMount } from './useIsMount';
/***********************/





import { RouteLocationContext, ChangeRouteContext } from '../../App';

import { motion } from 'framer-motion';







function Eye() {

	const history = useHistory();

	const [isNext, setIsNext] = useContext(ChangeRouteContext);
	const [routeLocation, setRouteLocation] = useContext(RouteLocationContext);

	setRouteLocation(history.location.pathname);

	useEffect(() => {
		if (isNext === 'prev') {
			history.push('/expertise');
			setIsNext('stable');
		} else if (isNext === 'next') {
			history.push('/eye');
			setIsNext('stable');
		}
	}, [isNext]);

	const transition = {
		duration: 1,
		ease: [0.43, 0.13, 0.23, 0.96]
	};
	const transition2 = {
		duration: 1,
		ease: [0.43, 0.13, 0.23, 0.96]
	};

	const divVariants = {
		exit: { opacity: 0, transition },
		enter: {
			y: "0%",
			opacity: 1,
			transition2
		}
	};




	/********************************************************/

	/**************************
	***********************/
	const isMount = useIsMount();


	const baseObject = document.getElementById("baseEye");
	const grid = document.getElementById("grid");
	let eyes, eyeCenters;
	let eyeDensity = 5;
	let numEyesX, numEyesY;
	const center = new THREE.Vector2();
	const mousePos = new THREE.Vector2();
	const PI = Math.PI;
	let maxDist;
	const maxEyeTravelX = 275;
	const maxEyeTravelY = 100;

	function init() {
		window.addEventListener("resize", throttled(handleResize));
		window.addEventListener("mousemove", throttled(handleMouseMove));
		handleResize();
		console.log("init it is");
	}

	function handleMouseMove(event) {
		mousePos.set(event.clientX, event.clientY);
		eyes.forEach((eye, i) => {
			const vecToMouse = new THREE.Vector2().subVectors(mousePos, eyeCenters[i]);
			const angle = vecToMouse.angle();
			const dist = mousePos.distanceTo(eyeCenters[i]);
			const distPercent = map(dist, 0, maxDist, 0, 1);
			const clampedMouseX = clamp(vecToMouse.x, maxEyeTravelX * -1, maxEyeTravelX);
			const clampedMouseY = clamp(vecToMouse.y, maxEyeTravelY * -1, maxEyeTravelY);
			const pupilX = map(clampedMouseX, 0, maxEyeTravelX, 0, maxEyeTravelX);
			const pupilY = map(clampedMouseY, 0, maxEyeTravelY, 0, maxEyeTravelY);
			const scale = map(dist, 0, maxDist, 0.5, 1.25);

			eye.style.setProperty("--pupil-x", pupilX);
			eye.style.setProperty("--pupil-y", pupilY);
			eye.style.setProperty("--scale", scale);
		});
	}

	function handleResize() {

		// recreate the grid and elements 
		const largeSide = Math.max(Window.innerWidth, Window.innerHeight);
		const size = Math.round(largeSide / eyeDensity);
		numEyesX = Math.ceil(Window.innerWidth / size);
		numEyesY = Math.ceil(Window.innerHeight / size);
		grid.style.setProperty("--num-columns", numEyesX);
		grid.style.setProperty("--num-rows", numEyesY);
		grid.innerHTML = "";
		generateArrowGrid();

		center.set(Window.innerWidth * 0.5, Window.innerHeight * 0.5);
		maxDist = center.length() * 2;

		// send a fake mouse event to trigger the initial point
		handleMouseMove({ clientX: center.x, clientY: center.y });
	}

	function generateArrowGrid() {
		eyes = [];
		eyeCenters = [];
		for (let i = 0; i < 3; i += 1) {

			// add the eye to the grid
			const newArrow = baseObject.cloneNode(true);
			newArrow.id = `eye-${i}`;
			newArrow.setAttribute("class", "eye");
			grid.appendChild(newArrow);
			eyes.push(newArrow);

			// save its center point for use later
			const eyeRect = newArrow.getBoundingClientRect();
			const eyeCenter = new THREE.Vector2(
				eyeRect.left + (newArrow.clientWidth * 0.5),
				eyeRect.top + (newArrow.clientHeight * 0.5),
			);
			eyeCenters.push(eyeCenter);
		}
	}

	// USEFUL FUNCTIONS
	function throttled(fn) {
		let didRequest = false;
		return param => {
			if (!didRequest) {
				requestAnimationFrame(() => {
					fn(param);
					didRequest = false;
				});
				didRequest = true;
			}
		};
	}
	function map(value, min1, max1, min2, max2) {
		return (value - min1) * (max2 - min2) / (max1 - min1) + min2;
	}
	function clamp(value, min = 0, max = 1) {
		return value <= min ? min : value >= max ? max : value;
	}

	useEffect(() => {
		if(isMount) {
			console.log('First Render');
		} else {
			console.log('SubSequent render');
		}
	}, [])

	/************************************************************/



	return (
		<motion.div className='eyeHolder' initial="exit" animate="enter" exit="exit" variants={divVariants}>
			<div id='grid'>
			</div>
			<svg id="baseEye" className="eye" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" fill="black">
				<clipPath id="lids">
					<path id="lidsPath"
						strokeLinejoin="round" strokeLinecap="round"
						d="M 50 500 Q 500 0 950 500 Q 500 850 50 500"
					/>
				</clipPath>
				<g clipPath="url(#lids)">
					<rect className="whites" width="1000" height="1000" fill="#fff" />
					<g className="pupilGroup">
						<circle className="pupil" cx="500" cy="500" r="150" fill="#000" />
						<circle className="glint" cx="450" cy="450" r="20" fill="#fff" />
					</g>
				</g>
				<use href="#lidsPath" className="lids" stroke="#000" strokeWidth="20" />
			</svg>

		</motion.div>

	)
}

export default Eye;