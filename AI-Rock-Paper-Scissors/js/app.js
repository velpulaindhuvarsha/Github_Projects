import { Game } from './game.js';
import { createUI } from './ui.js';
import { startCamera } from './camera.js';

const game = new Game(() => {});
const ui = createUI(game);
game.onChange = ui.render;

let stopCamera;
document.getElementById('camera-button').addEventListener('click', () => {
	const button = document.getElementById('camera-button');
	const status = document.getElementById('camera-status');
	if (stopCamera) { stopCamera(); stopCamera = undefined; button.querySelector('span').textContent = 'Use camera'; status.textContent = 'Camera off'; return; }
	if (!navigator.mediaDevices?.getUserMedia || !window.Hands) { status.textContent = 'Camera model unavailable'; return; }
	button.querySelector('span').textContent = 'Stop camera';
	stopCamera = startCamera({ video: document.getElementById('camera-feed'), onGesture: ui.playMove, onStatus: (message) => { status.textContent = message; } });
});
