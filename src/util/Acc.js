export class Computer {
	acc = (i) => {
		this.res += i;
		return 1;
	}

	jmp = (i) => {
		return i;
	}

	nop = () => {
		return 1;
	}

	constructor(prg) {
		this.prg = prg;
		this.res = 0;
		this.ip = 0;
		this.instructions = {
			acc: this.acc,
			jmp: this.jmp,
			nop: this.nop
		};
	}

	run(log) {
		while (this.ip < this.prg.length) {
			let i = this.prg[this.ip].substring(0, 3);
			let a = this.prg[this.ip].match(/[-\d]+/)[0];
			if (log) console.log(`${this.ip}: ${this.prg[this.ip]}, (${typeof this.prg[this.ip]}), Res: ${this.res}, Ins: ${i}, Val: ${a}`);
			this.ip += this.instructions[i](parseInt(a, 10));
		}
	}

	debug(log) {
		let seen = [];
		while (!seen.includes(this.ip) && this.ip < this.prg.length) {
			seen.push(this.ip);
			let i = this.prg[this.ip].substring(0, 3);
			let a = this.prg[this.ip].match(/[-\d]+/)[0];
			if (log) console.log(`${this.ip}: ${this.prg[this.ip]}, (${typeof this.prg[this.ip]}), Res: ${this.res}, Ins: ${i}, Val: ${a}`);
			this.ip += this.instructions[i](parseInt(a, 10));
		}
	}
}