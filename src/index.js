const formatTime = (time) => {
  if (time < 60) {
    return `${time.toString()}m`;
  } else {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return minutes ? `${hours}h ${minutes} min` : `${hours}h`;
  }
};
module.exports = formatTime;
