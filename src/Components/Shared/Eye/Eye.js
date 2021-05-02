import React from 'react';
import './Eye.css';
function Eye() {

	let doc = document.documentElement;
	let clientHeight = doc.clientHeight;
	let clienthWidth = doc.clientWidth;

	document.addEventListener("mousemove", event => {
		let x;
		let y;
		let xw;
		let yh;

		if (event.view.self.innerWidth > 1400) {
			x = event.clientX;
			y = event.clientY;
			xw = (x * 100) / clienthWidth;
			yh = (y * 200) / clientHeight;
		}

		if (event.view.self.innerWidth < 1400) {
			x = event.clientX;
			y = event.clientY;
			xw = (x * 90) / clienthWidth;
			yh = (y * 200) / clientHeight;


			if (event.view.self.innerWidth < 1200) {
				x = event.clientX;
				y = event.clientY;
				xw = (x * 120) / clienthWidth;
				yh = (y * 200) / clientHeight;


				if (event.view.self.innerWidth < 1000) {
					x = event.clientX;
					y = event.clientY;
					xw = (x * 100) / clienthWidth;
					yh = (y * 200) / clientHeight;


					if (event.view.self.innerWidth < 768) {
						x = event.clientX;
						y = event.clientY;
						xw = (x * 110) / clienthWidth;
						yh = (y * 200) / clientHeight;
					}
				}
			}
		}

		let ball = document.querySelectorAll(".ball");
		// let abs = Math.abs(50 - xw);
		// if (abs <= 20) {
		//   // x1 => 20=100  0=30
		//   // x2 => 20=0   0=70
		//   // abs*5
		//   ball[0].style.left = xw + "%";
		//   ball[1].style.left = xw + "%";
		// } else {
		for (var i = 0; i < 2; i++) {
			ball[i].style.top = yh + "%";
			ball[i].style.left = xw + "%";
			ball[i].style.transition = "(-50%,-50%)";
		}
		// }
	});


	return (
		<div className="Eye">
			<div>
				<div className="ball" />
			</div>
			<div>
				<div className="ball" />
			</div>
		</div>
	)
}

export default Eye;