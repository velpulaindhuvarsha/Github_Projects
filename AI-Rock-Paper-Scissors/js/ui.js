const details = { rock: { symbol: '●', label: 'Rock' }, paper: { symbol: '▤', label: 'Paper' }, scissors: { symbol: '✂', label: 'Scissors' } };

export function createUI(game) {
  const $ = (id) => document.getElementById(id);
  const playerStage = $('player-stage'); const aiStage = $('ai-stage');
  let roundBusy = false;
  const render = ({ player, ai, outcome, round, playerScore, aiScore, streak, matchWinner, target }) => {
    playerStage.classList.remove('is-revealed'); aiStage.classList.remove('is-thinking');
    $('player-gesture').textContent = details[player].symbol; $('player-caption').textContent = details[player].label;
    $('ai-gesture').textContent = details[ai].symbol; $('ai-caption').textContent = details[ai].label;
    $('round-number').textContent = String(round).padStart(2, '0'); $('player-score').textContent = playerScore; $('ai-score').textContent = aiScore; $('streak-score').textContent = streak;
    $('result-icon').textContent = outcome === 'win' ? '↗' : outcome === 'lose' ? '↘' : '→'; $('result-text').textContent = outcome === 'win' ? 'You read it perfectly.' : outcome === 'lose' ? 'The machine saw that coming.' : 'A clean split. Try again.'; $('ai-note').textContent = outcome === 'win' ? 'Pattern disrupted' : outcome === 'lose' ? 'Pattern recognized' : 'Pattern unresolved';
    playerStage.classList.add('is-revealed'); aiStage.classList.add('is-revealed');
    $('celebration-kicker').textContent = matchWinner ? 'MATCH COMPLETE' : 'ROUND COMPLETE';
    $('celebration-title').textContent = matchWinner === 'player' ? 'You win the match!' : matchWinner === 'ai' ? 'The machine wins.' : outcome === 'win' ? 'You win the round!' : outcome === 'lose' ? 'The machine wins the round.' : 'Round drawn.';
    $('celebration-copy').textContent = matchWinner ? `${matchWinner === 'player' ? 'You' : 'Machine'} reached ${target} winning rounds.` : `Score: ${playerScore} - ${aiScore}. First to ${target}.`;
    $('continue-button').textContent = matchWinner ? 'New match  →' : 'Continue  →';
    $('celebration').hidden = false;
  };
  const playMove = (choice) => { if (roundBusy || !$('celebration').hidden) return; roundBusy = true; aiStage.classList.add('is-thinking'); $('ai-caption').textContent = 'Calculating response'; window.setTimeout(() => { game.play(choice); roundBusy = false; }, 650); };
  document.querySelectorAll('.choice').forEach((button) => button.addEventListener('click', () => playMove(button.dataset.choice)));
  document.addEventListener('keydown', (event) => { const keyMap = { r: 'rock', p: 'paper', s: 'scissors' }; if (keyMap[event.key.toLowerCase()]) document.querySelector(`[data-choice="${keyMap[event.key.toLowerCase()]}"]`).click(); });
  const resetMatch = () => { game.reset(); roundBusy = false; $('celebration').hidden = true; $('player-score').textContent = '0'; $('ai-score').textContent = '0'; $('streak-score').textContent = '0'; $('round-number').textContent = '01'; $('player-gesture').textContent = '?'; $('ai-gesture').textContent = '◌'; $('player-caption').textContent = 'Awaiting input'; $('ai-caption').textContent = 'Waiting for your move'; $('result-text').textContent = 'Your move sets the tone.'; $('ai-note').textContent = 'Neural pattern recognition online'; };
  $('continue-button').addEventListener('click', () => { if (!$('celebration-kicker').textContent.includes('MATCH')) $('celebration').hidden = true; else resetMatch(); });
  $('target-select').addEventListener('change', (event) => { game.setTarget(Number(event.target.value)); resetMatch(); });
  $('reset-button').addEventListener('click', resetMatch);
  return { render, playMove };
}
