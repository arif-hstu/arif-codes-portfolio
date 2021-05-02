import React from 'react';
import { motion } from 'framer-motion';

import './ContactInfo.css';
import bar from '../../../resources/images/bar.png'

function ContactInfo() { 


	return (
		<div className=" ContactInfo">
			<div className='titleHolder'>
				<h1>CONTACT ME</h1>
				<h1>LETS GET IN TOUCH</h1>
				<p className='smallPara'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint inventore repudiandae ipsum aliquid hic sequi
				</p>
			</div>

			<div className="skillHolder">
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
		</div>
	)
}

export default ContactInfo;