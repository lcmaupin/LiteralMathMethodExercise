// 1a
var warmHugs = 'Hi, I\'m Olaf and I like warm hugs.';

// 1b
console.log(warmHugs);

// 1c
var warmHugsNew = warmHugs.replace("like", "love");
warmHugs = warmHugsNew;
console.log(warmHugsNew);
console.log(warmHugs);

// 2a
var beenImpaled = 'Oh, look at that. I\'ve been impaled.';
console.log(beenImpaled);

// 2b
console.log(beenImpaled.slice(18));

// 3a
var dotDotDot = '...';
console.log(dotDotDot);

// 3b
var skullBones = 'I don\'t have a skull' + dotDotDot + ' or bones.';
console.log(skullBones);

// 4
console.log(Math.PI);

// 5
var randomNumber = Math.floor(Math.random() * 3 + 1);
console.log(randomNumber);