import React from 'react';
import { useParams } from 'react-router-dom';
import './Project.css';
import moon from '../../resources/icons/moon.svg';
import loop from '../../resources/icons/loop.svg';
import sound from '../../resources/icons/sound.svg';
import upArrow from '../../resources/icons/upArrow.svg';
import downArrow from '../../resources/icons/downArrow.svg';

function Project() {
	const { type, id } = useParams();

	const randomColor = ['#cfb4e8', '#ba94de'];

	const gradient = {
		backgroundImage: 'radial-gradient(circle, '+randomColor[0]+' 0%, '+randomColor[0]+' 10%, '+randomColor[1]+' 60%)'
	}

	return (
		<div style={gradient} className='Project'>
			<div className="leftSide">
				<div className="first">
					<img src={moon} alt=""/>
				</div>
				<div className="second">
					<img src={loop} alt=""/>
				</div>
				<div className="third">
					<img src={sound} alt=""/>
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
					<img src={upArrow} alt=""/>
				</div>
				<div className="second">
					<div className="details">
						<p>DETAILS</p>
					</div>
				</div>
				<div className="third">
					<img src={downArrow} alt=""/>
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