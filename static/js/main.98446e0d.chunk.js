(this.webpackJsonpaoc20=this.webpackJsonpaoc20||[]).push([[0],{28:function(t,n,e){},29:function(t,n,e){},30:function(t,n,e){},31:function(t,n,e){},33:function(t,n,e){},34:function(t,n,e){},35:function(t,n,e){},44:function(t,n,e){"use strict";e.r(n);var a=e(4),i=e(5),r=e.n(i),c=e(19),o=e.n(c),s=(e(28),e(22)),u=(e(29),e(20)),l=e(6),h=e(0),p=e(3),f=e(2),b=e(1),j=(e(30),e(31),function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"render",value:function(){var t=this.props.day;return Object(a.jsxs)("header",{className:"App-header",children:[t&&t>1&&Object(a.jsx)("input",{className:"prev",type:"button",value:"< Previous",onClick:function(n){n.stopPropagation(),window.location.href="".concat("/aoc20","/#/").concat(t-1)}}),t&&t<25&&Object(a.jsx)("input",{className:"next",type:"button",value:"Next >",onClick:function(n){n.stopPropagation(),window.location.href="".concat("/aoc20","/#/").concat(t+1)}}),Object(a.jsx)("div",{onClick:function(){window.location.href="".concat("/aoc20","/")},children:Object(a.jsx)("h1",{children:t?"Advent of Code 2020 - Day ".concat(t):"Advent of Code 2020"})})]})}}]),e}(r.a.Component)),v=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{}),Object(a.jsx)("div",{className:"App-grid",children:Array.apply(null,{length:25}).map((function(t,n){return Object(a.jsx)("div",{onClick:function(t){return window.location.href="".concat("/aoc20","/#/").concat(n+1)},children:n+1},n)}))})]})}}]),e}(r.a.Component),O=e(12),y=e.n(O),d=e(14),g=(e(33),e(34),function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"input",children:["Input:",Object(a.jsx)("textarea",{placeholder:"<No input yet>",value:this.props.value,onChange:this.props.onChange}),"Number of lines: ",this.props.value?this.props.value.split("\n").length:0]})}}]),e}(r.a.Component)),m=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(t){var a;return Object(h.a)(this,e),(a=n.call(this,t)).state={input:null},a}return Object(p.a)(e,[{key:"loadInput",value:function(){var t=Object(d.a)(y.a.mark((function t(n){var e,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=14;break}return t.prev=1,t.next=4,fetch("".concat(this.props.match.params.day,".txt"));case 4:if(!(e=t.sent).ok){t.next=10;break}return t.next=8,e.text();case 8:(a=t.sent).startsWith("<!DOCTYPE html>")||this.setState({input:a.replace(/\r/gm,""),day:this.props.match.params.day});case 10:t.next=14;break;case 12:t.prev=12,t.t0=t.catch(1);case 14:case"end":return t.stop()}}),t,this,[[1,12]])})));return function(n){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.loadInput(this.props.match.params.day)}},{key:"componentDidUpdate",value:function(t){null===this.state.input&&this.loadInput(this.props.match.params.day)}},{key:"render",value:function(){var t=this,n=parseInt(this.props.match.params.day),e=this.state.input;if(n<1||n>25)return Object(a.jsxs)("div",{children:[Object(a.jsx)(j,{}),Object(a.jsx)("h1",{children:"404 - No such day in Advent of Code!"})]});var i=this.props.solvers[n-1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{day:n}),Object(a.jsx)("div",{className:"solution",children:Object(a.jsxs)("div",{className:"data",children:[Object(a.jsx)(g,{value:e||"",onChange:function(n){return t.setState({input:n.target.value})}}),i?Object(a.jsx)(i.a,{header:i.b.prototype.solve?"Part 1:":"Solution:",input:e}):Object(a.jsx)("div",{className:"part1",children:"part1"}),i&&i.b.prototype.solve&&Object(a.jsx)(i.b,{header:"Part 2:",input:e})]})})]})}}],[{key:"getDerivedStateFromProps",value:function(t,n){return n.day!==t.match.params.day?{input:null,day:t.match.params.day}:null}}]),e}(r.a.Component),k=(e(35),function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){var t;Object(h.a)(this,e);for(var i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];return(t=n.call.apply(n,[this].concat(r))).state={},t.show=!0,t.runcontrols=!1,t.running=!1,t.solution=function(n){if(!t.state.solution)return!1;var e=0;return t.state.solution.toString().split("\n").map((function(t){return Object(a.jsx)("p",{children:t},e++)}))},t}return Object(p.a)(e,[{key:"asyncSolve",value:function(){var t=Object(d.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{this.solve(n)}catch(e){console.log(e),this.setState({error:e})}case 1:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){null!==this.props.input&&this.run(!1)}},{key:"componentDidUpdate",value:function(t){this.props.input!==t.input&&null!==this.props.input&&this.run(!1)}},{key:"run",value:function(t){try{if(this.runControls&&(this.running=t,!this.running))return;if(null===this.props.input)return;this.setState({error:null}),this.asyncSolve(this.props.input)}catch(n){console.log(n),this.setState({error:n})}}},{key:"render",value:function(){var t=this;try{return Object(a.jsxs)("div",{className:"solver",children:[Object(a.jsxs)("div",{className:"control",children:[this.props.header,this.runControls&&Object(a.jsx)("input",{type:"button",value:"Solve",onClick:function(n){return t.run(!0)}})]}),Object(a.jsx)("div",{className:"result",children:this.customRender?this.customRender():this.state.error?Object(a.jsxs)("div",{children:["Error: ",this.state.error.toString()]}):Object(a.jsx)(this.solution,{})})]})}catch(n){return Object(a.jsxs)("div",{children:["Error: ",n.toString()]})}}}]),e}(r.a.Component)),x=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){for(var n=t.split("\n").map((function(t){return parseInt(t,10)})),e=0;e<n.length;e++)for(var a=e+1;a<n.length;a++)if(n[e]+n[a]===2020)return void this.setState({solution:"".concat(n[e]," \xd7 ").concat(n[a]," = ").concat(n[e]*n[a])});this.setState({solution:"Entries: ".concat(n.length,"\nNo solution found")})}}]),e}(k),S=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){for(var n=t.split("\n").map((function(t){return parseInt(t,10)})),e=0;e<n.length;e++)for(var a=e+1;a<n.length;a++)for(var i=a+1;i<n.length;i++)if(n[e]+n[a]+n[i]===2020)return void this.setState({solution:"".concat(n[e]," \xd7 ").concat(n[a]," \xd7 ").concat(n[i]," = ").concat(n[e]*n[a]*n[i])});this.setState({solution:"Entries: ".concat(n.length,"\nNo solution found")})}}]),e}(k),w=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){t=t.split("\n");var n=0,e=0;t.forEach((function(t){var a=t.split(": "),i=a[0];a=a[1];var r=(i=i.split(" "))[1][0];i=i[0].split("-");for(var c=parseInt(i[0],10),o=parseInt(i[1],10),s=0,u=0;u<a.length;u++)a[u]===r&&s++;c<=s&&s<=o&&n++,a[c-1]!==r&&a[o-1]!==r||a[c-1]===a[o-1]||e++})),this.setState({solution:"Passwords: ".concat(t.length,"\nValid passwords(1): ").concat(n,"\nValid passwords(2): ").concat(e)})}}]),e}(k),N=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k),I=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){t=t.split("\n");for(var n=[{x:1,y:1},{x:3,y:1},{x:5,y:1},{x:7,y:1},{x:1,y:2}],e=[0,0,0,0,0],a=0;a<n.length;a++)for(var i={x:0,y:0};i.y<t.length;)"#"===t[i.y][i.x%t[i.y].length]&&e[a]++,i.x+=n[a].x,i.y+=n[a].y;this.setState({solution:"Lines: ".concat(t.length,"\n# trees(1): ").concat(e[0],"\n# trees(2): ").concat(e[1],"\n# trees(3): ").concat(e[2],"\n# trees(4): ").concat(e[3],"\n# trees(5): ").concat(e[4],"\nProduct: ").concat(e.reduce((function(t,n){return t*n}),1))})}}]),e}(k),C=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k),E=function(){function t(n){var e=this;Object(h.a)(this,t),n.split(/[ \n]/).sort().forEach((function(t){t.startsWith("byr:")&&(e.byr=parseInt(t.substring(4),10)),t.startsWith("iyr:")&&(e.iyr=parseInt(t.substring(4),10)),t.startsWith("eyr:")&&(e.eyr=parseInt(t.substring(4),10)),t.startsWith("hgt:")&&(e.hgt={l:parseInt(t.substring(4),10),u:t.substring(4).split(/\d+/)[1]}),t.startsWith("hcl:")&&(e.hcl=t.substring(4)),t.startsWith("ecl:")&&(e.ecl=t.substring(4)),t.startsWith("pid:")&&(e.pid=t.substring(4))}))}return Object(p.a)(t,[{key:"complete",value:function(){return void 0!==this.byr&&void 0!==this.iyr&&void 0!==this.eyr&&void 0!==this.hgt&&void 0!==this.hcl&&void 0!==this.ecl&&void 0!==this.pid}},{key:"valid",value:function(t){return this.byr<1920||this.byr>2002?(t&&console.log("Incorrect birth year"),!1):this.iyr<2010||this.iyr>2020?(t&&console.log("Incorrect issue year"),!1):this.eyr<2020||this.eyr>2030?(t&&console.log("Incorrect expiration year"),!1):"cm"!==this.hgt.u&&"in"!==this.hgt.u?(t&&console.log("Invalid height unit"),!1):"cm"===this.hgt.u&&(this.hgt.l<150||this.hgt.l>193)||"in"===this.hgt.u&&(this.hgt.l<59||this.hgt.l>76)?(t&&console.log("Invalid length"),!1):/^#[0-9a-f]{6}$/.test(this.hcl)?/^(amb|blu|brn|gry|grn|hzl|oth)$/.test(this.ecl)?!!/^\d{9}$/.test(this.pid)||(t&&console.log("Invalid passport ID"),!1):(t&&console.log("Invalid eye color"),!1):(t&&console.log("Invalid hair color"),!1)}}]),t}(),P=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){t=t.split("\n\n").map((function(t){return new E(t)})).filter((function(t){return t.complete()})),this.setState({solution:"Passports: ".concat(t.length,"\nValid(1): ").concat(t.length,"\nValid(2): ").concat(t.filter((function(t){return t.valid()})).length)})}}]),e}(k),A=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k),D=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){var n=t.replace(/F|L/g,"0").replace(/B|R/g,"1").split("\n").map((function(t){return parseInt(t,2)})).sort((function(t,n){return t-n})),e=n[n.length-1],a=n.find((function(t,n,e){return n<e.length-1&&e[n+1]!==t+1}))+1;this.setState({solution:"Lines: ".concat(t.length,"\nHigh: ").concat(e,"\nMy seat: ").concat(a)})}}]),e}(k),W=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k),M=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){var n=t.split("\n\n").map((function(t){var n={},e=t.split("\n").length;return t.replace(/\n/g,"").split("").forEach((function(t){void 0===n[t]?n[t]=1:n[t]++})),n.all=Object.keys(n).filter((function(t){return n[t]===e})).length,n.any=Object.keys(n).length-1,n}));this.setState({solution:"Groups: ".concat(n.length,"\nTotal group answers: ").concat(n.reduce((function(t,n){return t+n.any}),0),"\nAll group count: ").concat(n.reduce((function(t,n){return t+n.all}),0))})}}]),e}(k),R=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k),L=function(){function t(n){Object(h.a)(this,t),this.color=n.match(/^(\w+(?:\s\w+)?)/)[0];var e=n.match(/\d+\s\w+(?:\s\w+)?/g);this.contents=null!==e?e.map((function(t){return/(\d+)\s(\w+(?:\s\w+)?)/.exec(t)})).map((function(t){return{num:parseInt(t[1],10),color:t[2]}})):[]}return Object(p.a)(t,[{key:"expand",value:function(t){for(var n=this.contents.map((function(t){return t})),e=0;e<n.length;){t[n[e++].color].contents.forEach((function(t){0===n.filter((function(n){return n.color===t.color})).length&&n.push(t)}))}this.expandedContents=n}},{key:"count",value:function(t){var n=0;return this.contents.forEach((function(e){n+=e.num*(1+t[e.color].count(t))})),n}}]),t}(),$=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){var n=(t=t.split("\n")).map((function(t){return new L(t)})).filter((function(t){return void 0!==t.color})),e={};n.forEach((function(t){e[t.color]=t})),n.forEach((function(t){return t.expand(e)}));var a=n.filter((function(t){return t.expandedContents.filter((function(t){return"shiny gold"===t.color})).length>0})).length,i=e["shiny gold"].count(e);this.setState({solution:"Lines: ".concat(t.length,"\nRules: ").concat(n.length,"\nShiny gold: ").concat(a,"\nShiny gold contents: ").concat(i)})}}]),e}(k),z=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k),F=function t(n,e){Object(h.a)(this,t),this.instr=n,this.arg=e},V=function(){function t(n){var e=this;Object(h.a)(this,t),this.acc=function(t){return e.res+=t,1},this.jmp=function(t){return t},this.nop=function(){return 1},this.prg=n,this.res=0,this.ip=0,this.instructions={acc:this.acc,jmp:this.jmp,nop:this.nop}}return Object(p.a)(t,null,[{key:"parse",value:function(t){return t.split("\n").map((function(t){return new F(t.match(/^\w+/).shift(),parseInt(t.match(/[-\d]+$/).shift(),10))}))}}]),Object(p.a)(t,[{key:"run",value:function(t){for(;this.ip<this.prg.length;)t&&console.log("".concat(this.ip,": ").concat(this.prg[this.ip].instr," ").concat(this.prg[this.ip].arg,", Res: ").concat(this.res)),this.ip+=this.instructions[this.prg[this.ip].instr](this.prg[this.ip].arg)}},{key:"debug",value:function(t){for(var n=[];!n.includes(this.ip)&&this.ip<this.prg.length;)n.push(this.ip),t&&console.log("".concat(this.ip,": ").concat(this.prg[this.ip].instr," ").concat(this.prg[this.ip].arg,", Res: ").concat(this.res)),this.ip+=this.instructions[this.prg[this.ip].instr](this.prg[this.ip].arg)}}]),t}(),B=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){t=V.parse(t);var n=new V(t);n.debug();for(var e=n.res,a=0,i=0;i<t.length;i++)if("acc"!==t[i].instr){var r=t.concat([]);if(r.splice(i,1,new F("nop"===t[i].instr?"jmp":"nop",t[i].arg)),(n=new V(r)).debug(),n.ip===r.length){a=n.res;break}}this.setState({solution:"Result: ".concat(e,"\nPatched: ").concat(a)})}}]),e}(k),J=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k),T=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"findInvalid",value:function(t){for(var n=25;n<t.length;n++)if(null==this.validate(t,n))return n}},{key:"validate",value:function(t,n){for(var e=Math.max(0,n-25);e<n-1;e++)for(var a=e+1;a<n;a++)if(t[e]+t[a]===t[n])return{x:e,y:a};return null}},{key:"findSum",value:function(t,n){for(var e=0;e<n-1;e++)for(var a=t[e],i=e+1;i<n;i++)if(a+=t[i],t[n]===a){console.log("".concat(e,"-").concat(i));for(var r=t[e],c=t[e],o=e+1;o<i+1;o++)t[o]<r&&(r=t[o]),t[o]>c&&(c=t[o]);return r+c}}},{key:"solve",value:function(t){var n=t.split("\n").map((function(t){return parseInt(t,10)})),e=this.findInvalid(n),a=this.findSum(n,e);this.setState({solution:"First invalid: ".concat(n[e],"\nSum: ").concat(a)})}}]),e}(k),U=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k),G=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"product",value:function(t){for(var n=0,e=0,a=1;a<t.length;a++)t[a]-t[a-1]===1&&n++,t[a]-t[a-1]===3&&e++;return n*e}},{key:"validate",value:function(t){for(var n=1;n<t.length;n++)if(t[n]-t[n-1]>3)return!1;return!0}},{key:"off",value:function(t,n,e){for(var a=0;a<n.length;a++)if(n[a]===t)return 0!==(1<<a&e);return!1}},{key:"remove",value:function(t,n,e){var a=this;return t.filter((function(t){return!a.off(t,n,e)}))}},{key:"count",value:function(t,n){for(var e=0,a=0;a<Math.pow(2,n.length);a++)this.validate(this.remove(t,n,a))&&e++;return e}},{key:"combinations",value:function(t){for(var n=this,e=[[]],a=1;a<t.length-1;a++)t[a+1]-t[a-1]<4?e[e.length-1].push(t[a]):e[e.length-1].length>0&&e.push([]);return console.log(this.count(t,[5])),e.filter((function(t){return t.length>0})).map((function(e){return n.count(t,e)})).reduce((function(t,n){return t*n}),1)}},{key:"solve",value:function(t){(t=t.split("\n").map((function(t){return parseInt(t,10)})).sort((function(t,n){return t-n}))).push(t[t.length-1]+3),t.unshift(0),console.log(t),this.setState({solution:"Product: ".concat(this.product(t),"\nCombinations: ").concat(this.combinations(t))})}}]),e}(k),H=function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k),Y=function(){function t(n){Object(h.a)(this,t),this.data=n.split("\n").map((function(t){return t.split("")})),this.height=this.data.length,this.width=this.data[0].length,this.steps=0}return Object(p.a)(t,[{key:"tick",value:function(t){for(var n=1===t?3:4,e=this.data,a=e.map((function(t){return t.map((function(t){return[]}))})),i=!1,r=0;r<a.length;r++)for(var c=0;c<a[r].length;c++){"."===e[r][c]&&(a[r][c]=".");var o=this.count(r,c,"#",2===t);"L"===e[r][c]&&(0===o?(a[r][c]="#",i=!0):a[r][c]="L"),"#"===e[r][c]&&(o>n?(a[r][c]="L",i=!0):a[r][c]="#")}return this.steps++,this.data=a,i}},{key:"count",value:function(t,n,e,a){var i=0;return this.find(t,n,-1,-1,a)===e&&i++,this.find(t,n,-1,0,a)===e&&i++,this.find(t,n,-1,1,a)===e&&i++,this.find(t,n,0,-1,a)===e&&i++,this.find(t,n,0,1,a)===e&&i++,this.find(t,n,1,-1,a)===e&&i++,this.find(t,n,1,0,a)===e&&i++,this.find(t,n,1,1,a)===e&&i++,i}},{key:"find",value:function(t,n,e,a,i){for(var r=this.data.length,c=this.data[0].length;n+=a,(t+=e)>=0&&n>=0&&t<r&&n<c;)if(!i||"."!==this.data[t][n])return this.data[t][n]}},{key:"countOccupied",value:function(){return this.data.map((function(t){return t.filter((function(t){return"#"===t})).join("")})).join("").length}},{key:"output",value:function(){return this.data.map((function(t){return t.join("")})).join("\n")}}]),t}(),q=[{a:x,b:S},{a:w,b:N},{a:I,b:C},{a:P,b:A},{a:D,b:W},{a:M,b:R},{a:$,b:z},{a:B,b:J},{a:T,b:U},{a:G,b:H},{a:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){for(var n=new Y(t),e=new Y(t),a=new Date;n.tick(1););for(;e.tick(2););var i=new Date;console.log("".concat(i-a,"ms")),this.setState({map:n,map2:e})}},{key:"customRender",value:function(){var t=this.state.map,n=this.state.map2;return Object(a.jsxs)("div",{children:[t&&Object(a.jsx)("p",{children:"Map size: ".concat(t.data[0].length,"\xd7").concat(t.data.length)}),t&&Object(a.jsx)("p",{children:"Map 1 steps: ".concat(t.steps,", Seats occupied: ").concat(t.countOccupied())}),n&&Object(a.jsx)("p",{children:"Map 2 steps: ".concat(n.steps,", Seats occupied: ").concat(n.countOccupied())}),n&&Object(a.jsx)("p",{style:{fontFamily:"monospace"},children:n.output()})]})}}]),e}(k),b:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k)},{a:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){this.setState({solution:"No solution yet"})}}]),e}(k),b:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k)},{a:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){this.setState({solution:"No solution yet"})}}]),e}(k),b:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k)},{a:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){this.setState({solution:"No solution yet"})}}]),e}(k),b:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k)},{a:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){this.setState({solution:"No solution yet"})}}]),e}(k),b:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k)},{a:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){this.setState({solution:"No solution yet"})}}]),e}(k),b:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k)},{a:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){this.setState({solution:"No solution yet"})}}]),e}(k),b:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k)},{a:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){this.setState({solution:"No solution yet"})}}]),e}(k),b:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k)},{a:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){this.setState({solution:"No solution yet"})}}]),e}(k),b:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k)},{a:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){this.setState({solution:"No solution yet"})}}]),e}(k),b:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k)},{a:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){this.setState({solution:"No solution yet"})}}]),e}(k),b:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k)},{a:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){this.setState({solution:"No solution yet"})}}]),e}(k),b:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k)},{a:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){this.setState({solution:"No solution yet"})}}]),e}(k),b:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k)},{a:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){this.setState({solution:"No solution yet"})}}]),e}(k),b:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k)},{a:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"solve",value:function(t){this.setState({solution:"No solution yet"})}}]),e}(k),b:function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(h.a)(this,e),n.apply(this,arguments)}return e}(k)}];function K(){return Object(a.jsx)(u.a,{basename:"".concat("/aoc20"),children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/:day",render:function(t){return Object(a.jsx)(m,Object(s.a)({solvers:q},t))}}),Object(a.jsx)(l.a,{exact:!0,path:"/",component:v}),Object(a.jsx)(l.a,{path:"/",render:function(t){return Object(a.jsx)("h2",{children:"404 - this puzzle does not exist!"})}})]})})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(a.jsx)(K,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.98446e0d.chunk.js.map