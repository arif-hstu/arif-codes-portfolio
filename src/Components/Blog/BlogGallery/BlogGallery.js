import React from 'react';
import { motion } from 'framer-motion';

import './BlogGallery.css';
import bar from '../../../resources/images/bar.png'

function BlogGallery() { 


	return (
		<div className=" BlogGallery">
			<div className='titleHolder'>
				<h1>Blog............</h1>
				<h1>Graphic Designer</h1>
				<p className='smallPara'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint inventore repudiandae ipsum aliquid hic sequi
				</p>
			</div>

			<div className="blogHolder">
				<div className="blog">
					<h3>WEB DESIGN</h3>
					<p className='smallPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum quo iusto culpa! Accusantium, laboriosam?</p>
				</div>
				<div className="blog">
					<h3>GRAPHIC DESIGN</h3>
					<p className='smallPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum quo iusto culpa! Accusantium, laboriosam?</p>
				</div>
				<div className="blog">
					<h3>
						DEVELOPMENT
					</h3>
					<p className='smallPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum quo iusto culpa! Accusantium, laboriosam?</p>
				</div>
				<div className="blog">
					<h3>
						DIGITAL MEDIA
					</h3>
					<p className='smallPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum quo iusto culpa! Accusantium, laboriosam?</p>
				</div>
			</div>
		</div>
	)
}

export default BlogGallery;