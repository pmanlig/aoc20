// import React from 'react';
import Solver from './Solver';

class Cups {
	constructor(txt) {
		this.cups = txt.split('').map(i => parseInt(i, 10));
		this.current = 0;
		this.shuffles = 0;
	}

	shuffle() {
		let len = this.cups.length;
		let remove = [];
		for (let i = 1; i < 4; i++) {
			remove.push(this.cups[(this.current + i) % len]);
		}
		let val = this.cups[this.current];
		let dest = val === 1 ? len : val - 1;
		while (remove.includes(dest)) { dest = dest === 1 ? len : dest - 1; }
		dest = this.cups.findIndex(x => x === dest);
		if (dest < this.current) {
			for (let i = this.current + 3; i > dest + 3; i--) { this.cups[i % len] = this.cups[(i - 3) % len]; }
			dest++;
			for (let i = 0; i < 3; i++) { this.cups[(dest + i) % len] = remove[i]; }
			this.current = (this.current + 4) % len;
		} else {
			for (let i = this.current + 1; i < dest - 2; i++) { this.cups[i] = this.cups[i + 3]; }
			for (let i = 0; i < 3; i++) { this.cups[dest - i] = remove[2 - i]; }
			this.current = (this.current + 1) % len;
		}
		this.shuffles++;
	}

	toString() {
		let txt = `Shuffle ${this.shuffles}: `;
		for (let i = 0; i < this.cups.length; i++) {
			if (i === (this.current + 1) % this.cups.length) { txt += "["; }
			// if (this.cups[i] > 13 && this.cups[i] < 18) { txt += '*'; }
			if (i === this.current) { txt += `(${this.cups[i]})`; } else { txt += `${this.cups[i]}` }
			if (i === (this.current + 3) % this.cups.length) { txt += "] " } else { txt += " "; }
			// if (i < this.cups.length - 1 && this.cups[i] < 100 && this.cups[i + 1] > 500000) { txt += "... "; }
			// if (i < this.cups.length - 1 && this.cups[i] < 100 && this.cups[i + 1] > 500000) { console.log((this.cups[i + 1] - this.cups[i]) % 4); }
		}
		return txt;
	}

	key() {
		let b = this.cups.findIndex(x => x === 1);
		// let s = this.cups.slice(b).concat(this.cups.slice(0, b));
		// return this.cups[this.current] + s.join('');
		return this.cups.slice(b + 1).concat(this.cups.slice(0, b)).join('');
	}
}

export class S23a extends Solver {
	shuffle(state) {
		if (state.shuffles > 9999999) {
			let i = state.cups.findIndex(x => x === 1);
			i = state.cups[(i + 1) % 1000000] * state.cups[(i + 2) % 1000000];
			this.setState({ result: i });
			return;
		}
		for (let i = 0; i < 100; i++) { state.shuffle(); }
		this.setState({ part2: state });
		setTimeout(() => this.shuffle(state), 1);
	}

	solve(input) {
		input = "389125467";
		let part1 = new Cups(input);
		for (let i = 0; i < 100; i++) { part1.shuffle(); }

		let part2 = new Cups(input);
		while (part2.cups.length < 1000000) {
			part2.cups.push(part2.cups.length + 1);
		}

		this.setState({ part1: part1.key(), part2: part2 });
		setTimeout(() => this.shuffle(part2), 1);
	}

	customRender() {
		let { part1, part2, result } = this.state;
		if (part1 === undefined || part2 === undefined) { return <div></div>; }
		return <div>
			<p>Expected: 67384529</p>
			<p>Cup order: {part1}</p>
			<p>Shuffles: {part2.shuffles}</p>
			<p>Result: {result || "Calculating..."}</p>
		</div>;
	}
}

export class S23b extends Solver {
}