import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './Home.css';
import NavBar from '../../Shared/NavBar/NavBar';
import Intro from '../Intro/Intro';
import { ChangeRouteContext } from '../../../App';
import { motion } from 'framer-motion';

function Home() {
	const history = useHistory();
	const [isNext, setIsNext] = useContext(ChangeRouteContext);
	useEffect(() => {

		if (isNext === true) {
			console.log('change')
			history.push('/expertise');
		} else {
			console.log('no chnage');
		}

	}, [isNext]);

	// Framer motion configuration
	const transition = {
		duration: 1,
		ease: [0.43, 0.13, 0.23, 0.96]
	};
	const transition2 = {
		duration: 1,
		ease: [0.96, 0.13, 0.23, 0.43]
	}

	const divVariants = {
		exit: {opacity: 0, transition },
		enter: {
			y: "0%",
			opacity: 1,
			transition2
		}
	};
	return (
		<motion.div className='Home' initial="exit" animate="enter" exit="exit" variants={divVariants}>
			<Intro />
		</motion.div>
	)
}

export default Home;