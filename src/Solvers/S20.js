// import React from 'react';
import Solver from './Solver';

export class S20a extends Solver {
	solve(input) {
		input = input.split('\n');
		this.setState({ solution: `Input length: ${input.length}` });
	}
}

export class S20b extends Solver {
}