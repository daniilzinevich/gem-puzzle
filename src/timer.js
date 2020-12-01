function addZero(n) {
  return (n < 10 ? `0${n}` : n);
}

export function startTimer(time = 0) {
  // let timer = time;
  // let timeId;
  // function displayTime() {
  // setTimeout(displayTime, 1000);

  // }
  // timeId =
  return setInterval(() => {
    // var timer = time;
    time += 1;
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);

    document.querySelector('[data-id=timer]').innerHTML = `${addZero(minutes)}:${addZero(seconds)}`;
  }, 1000);
  // console.log('form timer',timeId);
  // return timeId;
}
