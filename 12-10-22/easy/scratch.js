let word = "skateboard";
let groups = ["ska", "sk", "t" ,]
let chunks = [];

for (c of groups) {
	let idx = word.indexOf(c);

	if (idx === 0) {
		chunks.push(word.slice(c.length));
	}
}
console.log(chunks);
