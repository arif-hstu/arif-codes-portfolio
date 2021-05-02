import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import "./Menu.css";

function Menu() {
	const list = {
		visible: {
			opacity: 1,
			width: "300px",
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.2,
				duration: 0.4
			}
		},
		hidden: {
			opacity: 0,
			width: 0,
			transition: {
				when: "afterChildren",
				staggerChildren: 0.4,
				duration: 0.5
			}
		}
	};

	const item = {
		visible: {
			opacity: 1,
			x: 0
		},
		hidden: {
			opacity: 0,
			x: -100
		}
	};
	return (
		<React.Fragment>
			<motion.ul
				initial="hidden"
				animate="visible"
				style={{
					background: "#e9007e",
					width: 200,
					padding: "25px",
					color: "#fff",
					borderRadius: 10
				}}
				variants={list}
			>
				<motion.li variants={item} whileHover={{ scale: 1.1 }}>
					First
        </motion.li>
				<motion.li variants={item} whileHover={{ scale: 1.1 }}>
					Second
        </motion.li>
				<motion.li variants={item} whileHover={{ scale: 1.1 }}>
					Third
        </motion.li>
				<motion.li variants={item} whileHover={{ scale: 1.1 }}>
					Fourth
        </motion.li>
				<motion.li variants={item} whileHover={{ scale: 1.1 }}>
					Fifth
        </motion.li>
			</motion.ul>
		</React.Fragment>
	);
}

export default Menu;



