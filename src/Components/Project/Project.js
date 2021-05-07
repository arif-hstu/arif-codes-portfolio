import React from 'react';
import { useParams } from 'react-router-dom';
import './Project.css';

function Project() {
	const { type, id } = useParams();
	return (
		<div className='Project'>
			This is project
		</div>
	)
}

export default Project;