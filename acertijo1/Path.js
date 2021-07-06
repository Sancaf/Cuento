const enlightenment = setInterval(awaking, 0.01);
let y = 0;
let z = 0;
let one = 0;
let two = 0;
let three = 0;

function awaking() {
	let x = y;
	let k = z;
	document.getElementById('title').style.color =
		'rgb(' + k + ',' + k + ',' + k + ')';
	document.getElementById('text').style.color =
		'rgb(' + x + ',' + x + ',' + x + ')';
	if (k < 19.7) {
		z += 0.07;
	} else if (k < 180 && x < 13) {
		y += 0.023;
		z += 0.17;
	} else {
		if (x < 200 && k < 235) {
			z += 0.097;
			y += 0.197;
		}
	}
}

Em7 = () => {
	const audio = document.createElement('audio');
	audio.src = 'Chords/Em7.mp3';
	audio.autoplay = true;
	audio.play();
};

A9 = () => {
	const audio = document.createElement('audio');
	audio.src = 'Chords/A9.mp3';
	audio.autoplay = true;
	audio.play();
};

Dmaj9 = () => {
	const audio = document.createElement('audio');
	audio.src = 'Chords/Dmaj9.mp3';
	audio.autoplay = true;
	audio.play();
};

stepOne = () => {
	if (one <= 0) {
		Em7();
		document.getElementById('first').style.color =
			'rgb(' + 14 + ',' + 42 + ',' + 85 + ')';
		one = 1;
	}
};

stepTwo = () => {
	if (one >= 1 && two <= 0) {
		A9();
		document.getElementById('second').style.color =
			'rgb(' + 179 + ',' + 30 + ',' + 26 + ')';
		two = 1;
	}
};

stepThree = () => {
	if (two >= 1 && three <= 0) {
		Dmaj9();
		document.getElementById('third').style.color =
			'rgb(' + 249 + ',' + 243 + ',' + 236 + ')';
		[...document.getElementsByTagName('span')].forEach(
			(element) => (element.style.cursor = 'default')
		);
		three = 1;
		setTimeout(() => {
			window.location.href = '../acertijo2/Ariadna.html';
		}, 2700);
	} else if (two >= 1 && three >= 1) {
	} else {
		one = 0;
		two = 0;
		document.getElementById('first').style.color =
			'rgb(' + y + ',' + y + ',' + y + ')';
		document.getElementById('second').style.color =
			'rgb(' + y + ',' + y + ',' + y + ')';
	}
};

mistake = () => {
	if (three <= 0) {
		one = 0;
		two = 0;
		document.getElementById('first').style.color =
			'rgb(' + y + ',' + y + ',' + y + ')';
		document.getElementById('second').style.color =
			'rgb(' + y + ',' + y + ',' + y + ')';
	}
};
