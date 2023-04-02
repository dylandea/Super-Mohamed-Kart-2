// audio

const destroy_audio = document.querySelector(
    ".destroy_audio"
);
const threw_audio = document.querySelector(
    ".threw_audio"
);
const pile_up_audio = document.querySelector(
    ".pile_up_audio"
);
const start_audio = document.querySelector(
    ".start_audio"
);

function initSound() {
    start_audio.currentTime = 0;
    start_audio.pause();
    destroy_audio.currentTime = 0;
    destroy_audio.pause();
    threw_audio.currentTime = 0;
    threw_audio.pause();
    pile_up_audio.currentTime = 0;
    pile_up_audio.pause();
}



function start_audio_function() {
    start_audio.pause();
    start_audio.currentTime = 0;
    start_audio.play();
}

function destroy_audio_function() {
    destroy_audio.pause();
    destroy_audio.currentTime = 0;
    destroy_audio.play();
}

function threw_audio_function() {
    threw_audio.pause();
    threw_audio.currentTime = 0;
    threw_audio.play();
}

function pile_up_audio_function() {
    pile_up_audio.pause();
    pile_up_audio.currentTime = 0;
    pile_up_audio.play();
}