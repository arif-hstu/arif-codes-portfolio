import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './Home.css';
import NavBar from '../../Shared/NavBar/NavBar';
import Intro from '../Intro/Intro';
import { ChangeRouteContext } from '../../../App';

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

	const divVariants = {
		exit: { y: "50%", opacity: 0, transition },
		enter: {
			y: "0%",
			opacity: 1,
			transition
		}
	};
	return (
		<div className='Home'>
			<Intro />
		</div>
	)
}

export default Home;