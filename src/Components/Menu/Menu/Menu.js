import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Menu.css';

import MenuItems from '../MenuItems/MenuItems';

import { MenuOpenContext } from '../../../App';

import { motion } from 'framer-motion';

function Menu({isOpen, setIsOpen}) {
	const [ isMenuOpen, setIsMenuOpen ] = useContext(MenuOpenContext);

	const menu_variants = {
		open: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: 300 }
	};

	return (
		<div className="Menu">
			<motion.div initial="hidden" animate={isMenuOpen ? "open" : "hidden"}>
				<button className='primaryBtn' onClick={() => 
					{setIsMenuOpen(!isMenuOpen);
						setIsOpen(!isOpen)}
				}>Menu</button>
				<motion.div className="menu-area" variants={menu_variants}>
					<div className='linkHolder'>
						<Link to='/'>Home</Link>
						<Link to='/expertise'>Expertise</Link>
						<Link to='/projects'>Projects</Link>
						<Link to='/blog'>Blog</Link>
						<Link to='/blog'>Contact Me</Link>
					</div>
				</motion.div>
			</motion.div>
		</div>
	)
}

export default Menu;