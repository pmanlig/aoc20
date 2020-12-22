// import React from 'react';
import Solver from './Solver';

class State {
	constructor(d1, d2) {
		this.deck1 = [].concat(d1);
		this.deck2 = [].concat(d2);
		this.hash = this.calcHash();
	}

	cmp(s) {
		if (this.deck1.length !== s.deck1.length || this.deck2.length !== s.deck2.length) { return false; }
		for (let i = 0; i < this.deck1.length; i++) {
			if (this.deck1[i] !== s.deck1[i]) { return false; }
		}
		for (let i = 0; i < this.deck2.length; i++) {
			if (this.deck2[i] !== s.deck2[i]) { return false; }
		}
		return true;
	}

	calcHash() {
		return this.deck1[0] * 50 + this.deck2[0];
	}
}

export class S22a extends Solver {
	score(deck) {
		let score = 0, multiplier = 1;
		while (deck.length > 0) {
			score += multiplier++ * deck.pop();
		}
		return score;
	}

	combat(p1, p2) {
		while (p1.length > 0 && p2.length > 0) {
			if (p1[0] > p2[0]) {
				p1.push(p1.shift());
				p1.push(p2.shift());
			} else {
				p2.push(p2.shift());
				p2.push(p1.shift());
			}
		}
		return this.score(p1.concat(p2));
	}

	recurse(p1, p2) {
		let hist = {};
		while (p1.length > 0 && p2.length > 0) {
			let ns = new State(p1, p2);
			if (hist[ns.hash] === undefined) { hist[ns.hash] = [ns]; }
			else if (hist[ns.hash].some(s => ns.cmp(s))) { return { p1win: true, deck: p1 }; }
			else { hist[ns.hash].push(ns); }
			let p1wins = p1[0] > p2[0];
			if (p1[0] < p1.length && p2[0] < p2.length) { p1wins = this.recurse(p1.slice(1, 1 + p1[0]), p2.slice(1, 1 + p2[0])).p1win; }
			if (p1wins) {
				p1.push(p1.shift());
				p1.push(p2.shift());
			} else {
				p2.push(p2.shift());
				p2.push(p1.shift());
			}
		}
		return { p1win: p1.length > 0, deck: p1.concat(p2) };
	}

	solve(input) {
		// console.log(play(input.trim().split("\n\n").map(x => x.split("\n").slice(1).map(Number))).score);
		input = input.split('\n\n').map(p => p.split('\n'));
		let p1 = { name: input[0].shift() }, p2 = { name: input[1].shift() };
		p1.cards = input[0].map(c => parseInt(c, 10));
		p2.cards = input[1].map(c => parseInt(c, 10));
		let score = this.combat(p1.cards, p2.cards);
		this.setState({ solution: `Players: ${input.length}\n${p1.name} ${p1.cards.length} cards\n${p2.name} ${p2.cards.length} cards\nFinal score: ${score}\nRecursive score: Calculating...` });
		setTimeout(() => {
			p1.cards = input[0].map(c => parseInt(c, 10));
			p2.cards = input[1].map(c => parseInt(c, 10));
			// let recursiveScore = this.score(this.recurse([9, 2, 6, 3, 1], [5, 8, 4, 7, 10]).deck);
			// console.log(this.recurse(p1.cards, p2.cards));
			let recursiveScore = this.score(this.recurse(p1.cards, p2.cards).deck);
			this.setState({ solution: `Players: ${input.length}\n${p1.name} ${p1.cards.length} cards\n${p2.name} ${p2.cards.length} cards\nFinal score: ${score}\nRecursive score: ${recursiveScore}` });
		}, 100);
	}
}

export class S22b extends Solver {
}