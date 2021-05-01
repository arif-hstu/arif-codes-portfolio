import React from 'react';

import './Home.css';
import NavBar from '../../Shared/NavBar/NavBar';
import Intro from '../Intro/Intro';
function Home() {
	return (
		<div className='Home'>
			<NavBar />
			<Intro />
		</div>
	)
}

export default Home;