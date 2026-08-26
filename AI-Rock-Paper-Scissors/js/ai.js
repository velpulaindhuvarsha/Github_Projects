const moves = ['rock', 'paper', 'scissors'];

export function chooseMove(history = []) {
  if (!history.length) return moves[Math.floor(Math.random() * moves.length)];
  const recent = history.slice(-3);
  const counts = recent.reduce((result, move) => ({ ...result, [move]: (result[move] || 0) + 1 }), {});
  const likely = Object.entries(counts).sort(([, left], [, right]) => right - left)[0][0];
  const counters = { rock: 'paper', paper: 'scissors', scissors: 'rock' };
  return Math.random() < 0.72 ? counters[likely] : moves[Math.floor(Math.random() * moves.length)];
}

export function getOutcome(player, ai) {
  if (player === ai) return 'draw';
  return (player === 'rock' && ai === 'scissors') || (player === 'paper' && ai === 'rock') || (player === 'scissors' && ai === 'paper') ? 'win' : 'lose';
}
