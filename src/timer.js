function addZero(n) {
    return (n < 10) ? '0' + n : n;
}

export function startTimer(time) {
    return setInterval(function() {
        time += 1;
        let seconds = Math.floor(time % 60);
        let minutes = Math.floor(time / 60);

        document.querySelector('[data-id=timer]').innerHTML = `${addZero(minutes)}:${addZero(seconds)}`;
    }, 1000);
}
