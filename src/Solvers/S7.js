// import React from 'react';
import Solver from './Solver';

const regex = /^(\w+(?:\s\w+)?)\sbags\scontain\s(?:(\d+)\s(\w+(?:\s\w+)?)\sbags?)?(?:,\s(\d+)\s(\w+(?:\s\w+)?)\sbags?)?(?:,\s(\d+)\s(\w+(?:\s\w+)?)\sbags?)?(?:,\s(\d+)\s(\w+(?:\s\w+)?)\sbags?)?(?:,?\s?(\d+)\s(\w+(?:\s\w+)?)\sbags?)?(?:,?\s?(\d+)\s(\w+(?:\s\w+)?)\sbags?)?.*$/;
let err = 0;

class Rule {
	constructor(line) {
		this.text = line;
		let args = regex.exec(line);
		if (null === args) {
			if (err++ < 5) console.log(line);
			return;
		}
		this.color = args[1];
		this.contents = [];
		let i = 2;
		while (i < args.length && args[i] !== undefined) {
			this.contents.push({
				num: parseInt(args[i++], 10),
				color: args[i++]
			});
		}
	}

	expand(map) {
		let ex = this.contents.map(c => c);
		let i = 0;
		while (i < ex.length) {
			let e = map[ex[i++].color].contents;
			e.forEach(c => {
				if (ex.filter(x => x.color === c.color).length === 0) { ex.push(c); }
			});
		}
		this.expandedContents = ex;
	}

	count(map) {
		let cnt = 0;
		this.contents.forEach(c => {
			cnt += c.num * (1 + map[c.color].count(map));
		});
		return cnt;
	}
}

export class S7a extends Solver {
	solve(input) {
		input = input.split('\n');
		let rules = input.map(r => new Rule(r)).filter(r => r.color !== undefined);
		let map = {};
		rules.forEach(r => {
			if (r.text.includes("no other bag") && r.contents.length > 0) console.log(r.text);
			if (!r.text.includes(",") && r.contents.length > 1) console.log(r.text);
			if (r.text.includes(",") && r.contents.length < 2) console.log(r.text);
			map[r.color] = r;
		});
		rules.forEach(r => r.expand(map));
		let shinyGold = rules.filter(x => x.expandedContents.filter(y => y.color === "shiny gold").length > 0).length;
		let shinyGoldContents = map["shiny gold"].count(map);
		this.setState({ solution: `Lines: ${input.length}\nRules: ${rules.length}\nShiny gold: ${shinyGold}\nShiny gold contents: ${shinyGoldContents}` });
	}
}

export class S7b extends Solver {
}