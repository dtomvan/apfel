// "Vader Jacob"
// arr @by Tom Oostveen

let hat = sound("hh*16").bank("tr808").lpf(6000);
let drums = s(`
  [bd,<cr:3 - - ->] - - - 
  sd - - clap 
  - <bd - bd -> bd 
  - sd - bd -
`).bank("tr909").lpf(5000);

let melody = note(`
  c4 - d4 - e4 - c4 -
  c4 - d4 - e4 - c4 -
  e4 - f4 - g4 - - -
  e4 - f4 - g4 - - -
  g4 a4 g4 f4 e4 - c4 -
  g4 a4 g4 f4 e4 - c4 -
  c4 - b3 - c4 - - -
  c4 - b3 - c4 - - -
`);

let lead = melody
  .slow(4)
  .sound("sawtooth")
  .attack(.1)
  .sustain(.5)
  .release(.1);

let lead2 = melody
  .slow(4)
  .sound("sawtooth")
  .attack(0)
  .distort(1.2)
  .tremolosync("4")
  .pattack(.25);

let section0 = hat.slow(2);
let section1 = stack(hat, drums);
let section2 = section1.stack(lead);
let section3 = section2.stack(lead2);

arrange (
  [4, section0],
  [8, section1],
  [8, section2],
  [16, section3],
).cpm(140 / 4)
