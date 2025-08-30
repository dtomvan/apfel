// "Bad Apple!!"
// song @by TouHou
// arr @by Tom Oostveen

let bpm = 138;

let crash = s(`rolandtr505_cr`).room(1).rsize(4).gain(.3);

let crash1 = crash.slow(8);
let kick1 = s(`bd`).bank("linn").struct("<x!3 x*4 x!3 x*2>*4").gain(1.5)._scope();
let kick2 = s(`bd`).bank("linn").struct("<x!7 x*2>*4").gain(0.6);

let fourcrash = arrange([7, silence], [1, crash.fast(4).room(0)]);
let fourotf = stack(
  s(`sh*8,hh*4`).gain("<.45 .35>*8"),
  s(`bongo:4*4`).gain(.8),
  s(`[~ dmx_oh]*4`).velocity(.07),
).crush(8).lpf(7000);

let chords = chord("[D#m!2 B [C# <C Eb Gb>]]!2").slow(8).voicing().piano().gain(0.3);

let bassline1 = 
  n(`[[0 [0 7]] [0 7 6 7]]!3 <[0 [7 9] 3 [9 10]] [3 [9 10] 0 [7 9]]>`)
  .slow(2)
  .scale("d#1:minor")
  .sound("gm_electric_bass_finger")
  .attack(.01)
  .room(.3)
  .size(1)
  .distort(2)
  .gain(.4)
  ._pianoroll();

let voice = (last) => last
  .scale("d#4:major")
  .sound("sawtooth")
  .lpf(1000)
  .attack(.1)
  .gain(2);


let verse1 = voice(n(`
    <
      <[
        1 2 3 4 5 ~ 8 7
        5 ~ 1 ~ 5 4 3 2
        1 2 3 4 5 ~ 4 3
      ]>@3
      <
        [2 1 2 3 2 1 1b 2]
        [2 ~ 3 ~ 4 ~ 5 ~]
      >
    >
  `))
  ._pianoroll();


let chorus = voice(n(`
    [6 7 5 4 5 ~ 4 5]
    [6 7 5 4 5 ~ 4 5]
    [4 3 2 0 1 ~ 0 1]
    [2 3 4 5 1 ~ 4 5]
    [6 7 5 4 5 ~ 4 5]
    [6 7 5 4 5 ~ 4 5]
    [4 3 2 0 1 ~ 0 1]
    [2 3 4 5 1 ~ 4 5]
    [6 7 5 4 5 ~ 4 5]
    [6 7 5 4 5 ~ 4 5]
    [4 3 2 0 1 ~ 0 1]
    [2 3 4 5 1 ~ 4 5]
    [6 7 5 4 5 ~ 4 5]
    [6 7 5 4 5 ~ 8 9]
    [10 9 8 7 5 ~ 4 5]
    [4 3 2 0 1 ~ ~ ~]
  `)
  .slow(16))
  ._pianoroll();

let section0 = stack(
  crash1,
  kick1,
);

let section1 = stack(
  kick2,
  bassline1,
  fourcrash,
);

let section2 = stack(
  kick2,
  verse1,
  bassline1.postgain(-.2),
  fourcrash,
);

let section3 = stack(
  kick2,
  chorus,
  bassline1.postgain(-.5),
  fourcrash,
);

stack(
  arrange(
    [8, section0],
    [8, section1],
    [8, section2],
    [16, section3],
  ).compressor("-10,10,10,0.2,0.2").postgain(0.2),
  fourotf
).cpm(bpm / 4)
