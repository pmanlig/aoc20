// import React from 'react';
import Solver from './Solver';
import {Computer} from '../util/Acc';

export class S8a extends Solver {
	solve(input) {
		input = input.split('\n');
		let cmp = new Computer(input);
		cmp.debug();
		let stop = cmp.res;
		let ok = 0;
		for (let i = 0; i < input.length; i++) {
			if (input[i].startsWith("acc")) continue;
			let patch = input.concat([]);
			let instr = patch[i];
			if (patch[i].startsWith("nop")) {
				instr = instr.replace("nop", "jmp");
			} else {
				instr = instr.replace("jmp", "nop");
			}
			patch.splice(i, 1, instr);
			cmp = new Computer(patch);
			cmp.debug();
			if (cmp.ip === patch.length) {
				ok = cmp.res;
				break;
			}
		}
		this.setState({ solution: `Result: ${stop}\nPatched: ${ok}` });
	}
}

export class S8b extends Solver {
}