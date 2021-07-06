let enlightenment = setInterval(awaking, 0.01);
let z = 0;
let j = 0;
let h = 0;
let q = 0;
let a = 0;
let w = 255;
let r = 0;
let o = 0;
function chas() {
	refreshIntervalId = setInterval(moraleja, 0.1);
}

function awaking() {
	if (h == 0) {
		let k = z;
		let x = j;
		document.getElementById('title').style.color =
			'rgb(' + k + ',' + k + ',' + k + ')';
		document.getElementById('text').style.color =
			'rgb(' + x + ',' + x + ',' + x + ')';
		if (k < 19.7 && h == 0) {
			z += 0.07;
		} else if (k < 180 && x < 13 && h == 0) {
			j += 0.031;
			z += 0.17;
		} else {
			if (x < 229 && k < 233 && h == 0) {
				z += 0.13;
				j += 0.21;
			}
		}
	} else {
		return;
	}
}

function moraleja() {
	if (a == 0) {
		return;
	} else {
		let i = w;
		if (w > 235) {
			document.getElementById('text').style.color =
				'rgb(' + i + ',' + i + ',' + i + ')';
			w -= 0.037;
		} else if (w > 110 && w < 235) {
			document.getElementById('text').style.color =
				'rgb(' + i + ',' + i + ',' + i + ')';
			w -= 0.437;
		} else {
			if (w > 50 && w < 110) {
				document.getElementById('text').style.color =
					'rgb(' + i + ',' + i + ',' + i + ')';
				w -= 0.637;
			} else if (w > 0 && w < 50) {
				document.getElementById('text').style.color =
					'rgb(' + i + ',' + i + ',' + i + ')';
				w -= 0.837;
			} else {
				clearInterval(refreshIntervalId);
			}
		}
	}
}

function darkness() {
	let g = z;
	let f = j;
	if (g > 0) {
		document.getElementById('title').style.textShadow =
			'0px 0px 0px rgba(0, 0, 0, 0)';
		document.getElementById('title').style.color =
			'rgb(' + g + ',' + g + ',' + g + ')';
		document.getElementById('text').style.color =
			'rgb(' + f + ',' + f + ',' + f + ')';
		z -= 0.317;
		j -= 0.317;
	} else if (z < 1 && a == 0) {
		ending();
	}
}

function ending() {
	if (
		document.getElementById('text').style.color != 'rgb(255,255,255)' &&
		q < 255
	) {
		let u = q;
		if (q < 23) {
			document.getElementById('text').style.color =
				'rgb(' + u + ',' + u + ',' + u + ')';
			document.getElementById('title').style.color =
				'rgb(' + u + ',' + u + ',' + u + ')';
			document.body.style.backgroundColor =
				'rgb(' + u + ',' + u + ',' + u + ')';
			q += 0.033;
		} else if (q < 75) {
			document.getElementById('text').style.color =
				'rgb(' + u + ',' + u + ',' + u + ')';
			document.getElementById('title').style.color =
				'rgb(' + u + ',' + u + ',' + u + ')';
			document.body.style.backgroundColor =
				'rgb(' + u + ',' + u + ',' + u + ')';
			q += 0.17;
		} else {
			document.getElementById('text').style.color =
				'rgb(' + u + ',' + u + ',' + u + ')';
			document.getElementById('title').style.color =
				'rgb(' + u + ',' + u + ',' + u + ')';
			document.body.style.backgroundColor =
				'rgb(' + u + ',' + u + ',' + u + ')';
			q += 0.217;
		}
	} else if (q > 254) {
		document.getElementById('text').innerHTML =
			'-Que sea éste el oro de tus apuestas-';
		a++;
	}
}

document.onkeydown = function (evt) {
	if (o == 0) {
		evt = evt || window.event;
		var isEscape = false;
		var isX = false;
		if ('key' in evt) {
			isEscape = evt.key === 'Escape' || evt.key === 'Esc';
			isX = evt.key === 'x' || evt.key === 'X';
		} else {
			isEscape = evt.keyCode === 27;
			isX = evt.keyCode === 88;
		}
		if (isEscape || isX) {
			h++;
			o++;
			setInterval(darkness, 0.1);
			chas();
		}
	} else {
		return;
	}
};
