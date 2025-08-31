// "Flight of the Bumblebee" (wip, help wanted lol)
// song @by Nikolai Rimsky-Korsakov
// arr @by Tom Oostveen

setcpm(167 / 4);

let rep1 = n(`
8 8b 7 7b 6 9b 8 8b 8 8b 7 7b 6 7b 7 8b
`);

let rep2 = n(`
8 8b 7 7b 7 7b 6 5 6 7b 7 8b 8 9b 8 8b
`);

let part1 = stack(
	cat(
		n(`
		19 19b 18 18b 18 18b 17 16 17 16 16b 15 15b 14 14b 13
		`),
	 n(`
	 12 12b 11 11b 11 11b 10  9 10  9 9b   8  8b  7  7b  6
	 `),
	 n(`
	 [5 5b 4 4b 4 4b 3 2]!2
	 `),
	 n(`
	 5 5b 4 4b 4 4b 3  6 5 5b 4 4b 3 4b 4 5b
	 `),
	 n(`
	 5 5b 4 4b 3  6 5 5b 5 5b 4 4b 3 4b 4 5b
	 `),
	 n(`
	 5 5b 4 4b 4 4b 3 2 3 4b 4 5b 5 6 5 5b
	 `),
	 n(`
	 5 5b 4 4b 4 4b 3 2 3 4b 4 5b 5 7b 7 8b
	 `),
	 rep1,
	 rep1,
	 rep2,
	 rep2,
	)
	.scale('a:minor')
	.piano()
	.velocity(cosine.segment(11).range(0.9, 0.4)),

				  chord(`
				  E7 ~ ~ ~
				  E7 ~ ~ ~
				  ~ ~ ~ ~
				  A- ~ A- D-
				  A- ~ A- D-
				  A- D- A- E7
				  A- D- A- E7
				  A7 D- D- G
				  D- ~ D- G
				  D- G- D- A7
				  D- G- D- A7
				  `)
				  .voicing()
				  .piano()
				  .slow(11)
				  .velocity(0.3),
);

let part2 = stack(
	cat(note(`
	[[F,A] A B A B A B A]
	`), note(`
	[A# G#]!4
	`)).fast(2).piano().velocity(.45),
				  note(`
				  A ~ A ~ Bb@2
				  `).piano().velocity(.6),
);

let part3 = stack(
	cat(n(`
	[8 9 8 7]!4
	`),n(`
	8 9b 9 10 11b 10 9 9b 8 9b 9 10 11b 10 9 9b
	`)).scale("a:minor").piano().velocity(.45),
);

arrange(
	[11, part1],
	[2, part2],
	[2, part3]
).pianoroll();
