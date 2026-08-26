const fingerTips = [8, 12, 16, 20];
const fingerPips = [6, 10, 14, 18];

function classify(landmarks) {
  const extended = fingerTips.map((tip, index) => landmarks[tip].y < landmarks[fingerPips[index]].y - 0.035);
  const openCount = extended.filter(Boolean).length;
  if (openCount === 0) return 'rock';
  if (extended[0] && extended[1] && !extended[2] && !extended[3]) return 'scissors';
  if (openCount >= 3) return 'paper';
  return null;
}

export function startCamera({ video, onGesture, onStatus }) {
  let stream;
  let active = true;
  let lastGesture = null;
  let stableFrames = 0;
  let locked = false;
  const hands = new window.Hands({ locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}` });
  hands.setOptions({ maxNumHands: 1, modelComplexity: 1, minDetectionConfidence: 0.7, minTrackingConfidence: 0.7 });
  hands.onResults((results) => {
    if (!active || !results.multiHandLandmarks?.[0]) { lastGesture = null; stableFrames = 0; return; }
    const gesture = classify(results.multiHandLandmarks[0]);
    if (gesture && gesture === lastGesture) stableFrames += 1;
    else { lastGesture = gesture; stableFrames = 0; }
    if (gesture && stableFrames >= 7 && !locked) { locked = true; onGesture(gesture); window.setTimeout(() => { locked = false; }, 900); }
    if (gesture) onStatus(`${gesture.toUpperCase()} detected`);
  });
  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: 640, height: 480 }, audio: false }).then((newStream) => {
    stream = newStream; video.srcObject = stream; video.classList.add('is-live'); onStatus('Show rock, paper, or scissors');
    const scan = async () => { if (!active) return; if (video.readyState >= 2) await hands.send({ image: video }); requestAnimationFrame(scan); };
    scan();
  }).catch(() => onStatus('Camera permission needed'));
  return () => { active = false; stream?.getTracks().forEach((track) => track.stop()); video.srcObject = null; video.classList.remove('is-live'); };
}