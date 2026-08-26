import { chooseMove, getOutcome } from './ai.js';

export class Game {
  constructor(onChange, target = 3) { this.onChange = onChange; this.target = target; this.reset(); }
  play(player) { const ai = chooseMove(this.history); const outcome = getOutcome(player, ai); this.history.push(player); if (outcome === 'win') { this.playerScore += 1; this.streak += 1; } else if (outcome === 'lose') { this.aiScore += 1; this.streak = 0; } else { this.streak = 0; } this.round += 1; const matchWinner = this.playerScore >= this.target ? 'player' : this.aiScore >= this.target ? 'ai' : null; this.onChange({ player, ai, outcome, round: this.round, playerScore: this.playerScore, aiScore: this.aiScore, streak: this.streak, matchWinner, target: this.target }); }
  setTarget(target) { this.target = target; this.reset(); }
  reset() { this.playerScore = 0; this.aiScore = 0; this.streak = 0; this.round = 0; this.history = []; }
}
