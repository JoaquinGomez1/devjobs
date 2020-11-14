export const getTimeAgo = (time) => {
  let passedDate = new Date(time);
  let timeNow = new Date();

  const secondsPassed = Math.trunc((timeNow - passedDate) / 1000);
  return getTimeSince(secondsPassed);
};

export const getTimeSince = (seconds) => {
  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.trunc(interval) + " y";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.trunc(interval) + " mon";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.trunc(interval) + " d";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.trunc(interval) + " h";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.trunc(interval) + " min";
  }
  return Math.trunc(seconds) + " s";
};
