// 1a
let warmHugs = 'Hi, I\'m Olaf and I like warm hugs.';
console.log(warmHugs);

// 1b
console.log(warmHugs.toUpperCase());

// 1c
let warmHugsNew = warmHugs.replace("like", "love");
warmHugs = warmHugsNew;
console.log(warmHugsNew);
console.log(warmHugs);

// 2a
let beenImpaled = 'Oh, look at that. I\'ve been impaled.';
console.log(beenImpaled);

// 2b
console.log(beenImpaled.slice(18));

// 3a
let dotDotDot = '...';
console.log(dotDotDot);

// 3b
let skullBones = `I don\'t have a skull${dotDotDot}or bones.`;
console.log(skullBones);

// 4
console.log(Math.PI);

// 5
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log(randomNumber);

// 6
console.log(' Let it go!'.toUpperCase().repeat(2).trim(0));

// 7a
let reindeers = 'Reindeers are better than people.';
console.log(reindeers);

// 7b
reindeers = reindeers.replace(/ /g, '_');
console.log(reindeers);

// 8
console.log(Math.sqrt(2));

// 9
var newRandomNumber = Math.floor(Math.random() * 17 + 7);
// var newRandomNumber = Math.floor(Math.random() * (23 - 7 + 1))
console.log(newRandomNumber);