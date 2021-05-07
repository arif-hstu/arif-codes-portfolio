import React from 'react';
import { useParams } from 'react-router-dom';
import './Project.css';

function Project() {
	const { type, id } = useParams();

	const randomColor = '#3ccad1';
	return (
		<div className='Project'>
			<div className="leftSide">
				<div className="first">
					first
				</div>
				<div className="second">
					second
				</div>
				<div className="third">
					third
				</div>
			</div>
			<div className="middlePart">
				<div className="holder">
					holder
				</div>
				<div className="title">
					title
				</div>
			</div>
			<div className="rightSide">
				<div className="first">
					first
				</div>
				<div className="second">
					second
				</div>
				<div className="third">
					third
				</div>
			</div>
			<div className="bottomPart">
				<div className="backHolder">
					<button className='primaryBtn'>
						BACK
					</button>
				</div>
			</div>
		</div>
	)
}

export default Project;