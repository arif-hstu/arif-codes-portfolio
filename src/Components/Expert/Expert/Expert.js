import React, { useContext, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import './Expert.css';

import ExpertInfo from '../ExpertInfo/ExpertInfo';
import { ChangeRouteContext } from '../../../App';
import { motion } from 'framer-motion';

function Expert() {
	const history = useHistory();
	const [isNext, setIsNext] = useContext(ChangeRouteContext);

	useEffect(() => {
		if(isNext === true) {
			history.push('/expertise');
		} else {
			history.push('/');
		}
	}, [isNext]);


	const transition = {
		duration: 1,
		ease: [0.43, 0.13, 0.23, 0.96]
	};

	const divVariants = {
		exit: { y: "50%", opacity: 0, transition },
		enter: {
			y: "0%",
			opacity: 1,
			transition
		}
	};

	return (
		<div className='Expert'>
		<motion.div className="single" initial="exit" animate="enter" exit="exit" variants={divVariants}>
			<ExpertInfo />
		</motion.div>

		</div>
	)
}

export default Expert;