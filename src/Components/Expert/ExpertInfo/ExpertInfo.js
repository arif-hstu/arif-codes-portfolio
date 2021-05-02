import React from 'react';
import { motion } from 'framer-motion';

import './ExpertInfo.css';
import bar from '../../../resources/images/bar.png'

function ExpertInfo() {


	return (
		<div className=" ExpertInfo">
			<div className='titleHolder'>
				<h1>Enthusiastic Front-End Web Developer</h1>
				<h1>Graphic Designer</h1>
				<p className='smallPara'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint inventore repudiandae ipsum aliquid hic sequi
				</p>
			</div>

			<div className="infoHolder">
				<div className="skills">
					<div className="skill">
						<h3>WEB DESIGN</h3>
						<p className='smallPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum quo iusto culpa! Accusantium, laboriosam?</p>
					</div>
					<div className="skill">
						<h3>GRAPHIC DESIGN</h3>
						<p className='smallPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum quo iusto culpa! Accusantium, laboriosam?</p>
					</div>
					<div className="skill">
						<h3>
							DEVELOPMENT
					</h3>
						<p className='smallPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum quo iusto culpa! Accusantium, laboriosam?</p>
					</div>
					<div className="skill">
						<h3>
							DIGITAL MEDIA
					</h3>
						<p className='smallPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum quo iusto culpa! Accusantium, laboriosam?</p>
					</div>
				</div>
				<div className='graphHolder'>
					<div className="graph">
						<p className="smallPara">
							Specialized in UI/UX
						</p>
						<img src={bar} alt="" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ExpertInfo;