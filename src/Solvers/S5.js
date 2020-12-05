//import React from 'react';
import Solver from './Solver';

export class S5a extends Solver {
	seat(code) {
		let r = 0, c = 0;
		for (let i = 0; i < 7; i++) {
			r = r << 1;
			if (code[i] === 'B') r++;
		}
		for (let j = 7; j < 10; j++) {
			c = c << 1;
			if (code[j] === 'R') c++;
		}
		return { row: r, col: c, id: 8 * r + c };
	}

	solve(input) {
		input = input.split('\n').map(c => this.seat(c));
		let sorted = input.map(x => x.id).sort((a, b) => a - b);
		console.log(sorted);
		let mySeat = sorted[0], i = 0;
		while (sorted[i++] === mySeat++) { }
		mySeat--;
		this.setState({ solution: `Lines: ${input.length}\nHigh: ${Math.max(...input.map(x => x.id))}\nMy seat: ${mySeat}` });
	}
}

export class S5b extends Solver {
}