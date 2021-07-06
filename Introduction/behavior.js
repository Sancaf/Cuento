let y = 0;
let z = 192;
let k = 2;
let f = 0;
let j = 192;
let h = 0;
const audio = document.getElementById('audio');
audio.currentTime = 29;
audio.volume = 0.0;

if (
	navigator.userAgent.match(/Android/i) ||
	navigator.userAgent.match(/webOS/i) ||
	navigator.userAgent.match(/iPhone/i) ||
	navigator.userAgent.match(/iPad/i) ||
	navigator.userAgent.match(/iPod/i) ||
	navigator.userAgent.match(/BlackBerry/i) ||
	navigator.userAgent.match(/Windows Phone/i)
) {
	alert('Creo que fui clara... Dije que lo abrieras en una computadora.');
} else {
	beginning = () => (document.getElementById('modal').style.display = 'none');
	$('#modal').modal(('show', { backdrop: 'static' }));

	function world() {
		beginning();
		audio.play();
		
		function rise() {
			if (audio.volume < 0.9 && h == 0) {
				audio.volume += 0.005;
			} else {
				return;
			}
		}

		function displayWords() {
			let x = y;
			if (x < 100 && j == 192) {
				document.getElementById('texto').style.color =
					'rgb(' + x + ', ' + x + ', ' + x + ')';
				y++;
			} else if (x < 192 && x > 99 && j == 192) {
				document.getElementById('texto').style.color =
					'rgb(' + x + ', ' + x + ', ' + x + ')';
				y += 2;
			} else {
				return;
			}
		}

		function displayFire() {
			if (y == 192 && z > 110 && j == 192) {
				document.getElementById('text').style.color =
					'rgb(192, ' + z + ', ' + z + ')';
				z--;
			} else if (z < 111 && y == 192 && z > 2 && j == 192) {
				audio.volume = 0.9;
				document.getElementById('text').style.color =
					'rgb(192, ' + z + ', ' + z + ')';
				z -= 2;
			} else {
				return;
			}
		}

		function extinguishFire() {
			if (z == 2 && k < 192 && j == 192) {
				document.getElementById('text').style.color =
					'rgb(192, ' + k + ', ' + k + ')';
				k += 2;
			} else {
				return;
			}
		}

		function darkness() {
			let l = j;
			if (l < 193 && l > 0 && k == 192) {
				setTimeout(() => {
					document.getElementById('texto').style.color =
						'rgb(' + l + ', ' + l + ', ' + l + ')';
					document.getElementById('text').style.color =
						'rgb(' + l + ', ' + l + ', ' + l + ')';
					j--;
				}, 100);
				setTimeout(() => {
					setInterval(downfall, 3000);
				}, 1300);
			} else {
				return;
			}
		}
		function downfall() {
			if (audio.volume < 1 && audio.volume > 0.006 && h == 0) {
				audio.volume -= 0.003;
			} else if (f == 0) {
				h++;
				window.location.href = './acertijo1/secuencia.html';
				f++;
			} else {
				return;
			}
		}

		setInterval(rise, 150);
		setTimeout(() => {
			setInterval(displayWords, 100);
		}, 2000);
		setInterval(displayFire, 80);
		setInterval(extinguishFire, 100);
		setInterval(darkness, 70);
	}
}
