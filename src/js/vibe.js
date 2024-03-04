const vibes = [
    "...because it was awesome!",
    "...yeah, me neither!",
    "...that there are no news, which is good news, right?",
    "...that there will be more news later!"
];

let vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector(".vibe").append(vibe);