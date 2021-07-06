let enlightenment = setInterval(awaking, 0.01);
let mistake = 0;
let z = 0;
let j = 0;
let y = 0;

function awaking() {
	let k = z;
	let x = j;
	document.getElementById('title').style.color =
		'rgb(' + k + ',' + k + ',' + k + ')';
	document.getElementById('point').style.color =
		'rgb(' + x + ',' + x + ',' + x + ')';
	if (k < 19.7) {
		z += 0.07;
	} else if (k < 180 && x < 13) {
		j += 0.023;
		z += 0.17;
	} else {
		if (x < 255 && k < 235) {
			z += 0.097;
			j += 0.197;
		}
	}
}

splitWords = () => {
	var po = document.getElementsByClassName('pa')[0];
	let i = 0;
	po.innerHTML = po.innerText
		.split(/\s/)
		.map(function (word) {
			i++;
			return (
				'<span id="' +
				word +
				'' +
				i +
				'"onmouseover=flashlight("' +
				word +
				'' +
				i +
				'")>' +
				word +
				'</span>'
			);
		})
		.join(' ');
};

splitWords();

flashlight = (word) => {
	let u = y;
	document.getElementById(word).style.color =
		'rgb(' + u + ',' + u + ',' + u + ')';
	y++;
	y++;
};

change = () => {
	let rta = document.getElementById('input').value.toLowerCase();
	if (rta == 'tablas' || rta == 'partes' || rta == 'piezas') {
		setTimeout(() => {
			window.history.replaceState(
				'https://53162999.bet/acertijo2/Ariadna.html',
				'Just foward',
				'https://53162999.bet/acertijo3/tesoro.html'
			);
			window.location.href = '../acertijo3/tesoro.html';
		}, 2520);
		return false;
	} else if (rta == nuaosrri) {
		window.location.href = '../Nuaosrri/index.html';
	} else if (mistake === 0) {
		mistake++;
		alert('Una pista: La muerte del ejército deja en paz a los reyes');
		return false;
	}
	else {
		alert(
			'Recuerda: Para cruzar el lago, construye una barca. No pienses en la orilla. Piensa, si has de pensar, en el recurso que te mantendrá a flote.'
		);
		return false;
	}
};
