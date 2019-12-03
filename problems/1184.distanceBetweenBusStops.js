const input = {
  distance: [7, 10, 1, 12, 11, 14, 5, 0],
  start: 7,
  end: 2,
};

const distanceBetweenBusStops = function (distance, start, destination) {
  let startN;
  start < destination ? startN = start : startN = destination;

  const N = Math.abs(start - destination);

  const path1 = Array.from(new Array(N), (val, index) => index + startN);

  const path1Distance = path1.reduce((acc, curr) => acc + distance[curr], 0);

  const total = distance.reduce((acc, curr) => acc + curr, 0);


  return Math.min(path1Distance, total - path1Distance);
};

const ans = distanceBetweenBusStops(input.distance, input.start, input.end);
console.log('ans ', ans);
