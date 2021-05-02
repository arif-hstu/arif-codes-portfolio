import React from 'react';
import { motion } from 'framer-motion';

import './ProjectGallery.css';
import bar from '../../../resources/images/bar.png';
import cleanex from '../../../resources/images/screenCleanex.png';
import fastMart from '../../../resources/images/screenFastMart.png';
import metroSpire from '../../../resources/images/screenMetroSpire.png';

function ProjectGallery() {


	return (
		<div className=" ProjectGallery">
			<div className='titleHolder'>
				<h1>PORTFOLIO</h1>
				<h1>MY RECENT WORK</h1>
				<p className='smallPara'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint inventore repudiandae ipsum aliquid hic sequi
				</p>
			</div>

			<div className="projectHolder">
				<div className="project">
					<h3>CLEANEX | URBAN CLEANING SERVICE <br /> MERN STACK</h3>
					<img src={cleanex} alt=""/>
					<p className='smallPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum quo iusto culpa! Accusantium, laboriosam?</p>
				</div>
				<div className="project">
					<h3>FAST MART | FASTEST ONLINE SHOPPING HUB <br /> MERN STACK</h3>
					<img src={fastMart} alt=""/>
					<p className='smallPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum quo iusto culpa! Accusantium, laboriosam?</p>
				</div>
				<div className="project">
					<h3>
						METRO SPIRE | ONLINE TICKET PURCHASING SYSTEM <br /> REACT APP
					</h3>
					<img src={metroSpire} alt=""/>
					<p className='smallPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum quo iusto culpa! Accusantium, laboriosam?</p>
				</div>
			</div>
		</div>
	)
}

export default ProjectGallery;